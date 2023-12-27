"use client"
import { chatStore } from '@/app/State/ChatStore'
import { userStore } from '@/app/State/UserStore'
import ProtectedNav from '@/app/components/ProtectedNav'
import Loader from '@/app/components/Spinner'
import { client, databases } from '@/app/config/AppwriteConfig'
import { Input } from '@nextui-org/react'
import { ID, Query } from 'appwrite'
import { SendHorizonal, Trash } from 'lucide-react'
import React, { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

const Groupchat = ({ params }) => {

    const isfetched = useRef(false)
    const [message, setmessage] = useState("")
    const user = userStore((state) => state.user)
    const chatstate = chatStore()
    const [loading, setloading] = useState(false)


    console.log("timing", chatstate.chats);


    useEffect(() => {
        if (!isfetched.current) {
            fetchmessages(params.id)

            client.subscribe(`databases.${process.env.NEXT_PUBLIC_DATABASE_ID}.collections.${process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID}.documents`,
                (res) => {
                    console.log(res, "real time response");
                    const payload = res.payload

                    if (res.events.includes("databases.*.collections.*.documents.*.create")) {

                        if (user.$id !== payload.userid) {
                            chatstate.addChat(payload)
                        }
                    } else if (res.events.includes(
                        "databases.*.collections.*.documents.*.delete")) {
                        if (user.$id !== payload.userid) {
                            chatstate.deleteChat(payload.$id)
                        }
                    }

                })

            isfetched.current = true
        }
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) {
            return
        }
        try {
            const res = await databases.createDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID, ID.unique(), {
                message: message,
                userid: user.$id,
                groups_id: params.id,
                name: user?.name,
            })
            chatstate.addChat(res)
            setmessage("")
            console.log(res);
        } catch (error) {
            toast.error(error.message, { theme: 'colored' })
        }
    }

    const fetchmessages = async (id) => {
        setloading(true)
        try {
            const res = await databases.listDocuments(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID,
                [
                    Query.equal("groups_id", id)
                ]
            )
            chatstate.addChats(res.documents)
            setloading(false)
        } catch (error) {
            toast.error(error.message, { theme: "colored" })
            setloading(false)
        }
        setloading(false)
    }

    const handledeletemessage = async (id) => {
        try {
            const res = await databases.deleteDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_CHAT_COLLECTION_ID, id)
            chatstate.deleteChat(id)
            toast.success("message deleted", { theme: "colored" })
        } catch (error) {
            toast.error(err.message, { theme: "colored" });
        }
    }

    return (
        <div className='px-4'>
            <div className='top-0 left-0 right-0 bg-white fixed px-4 py-2'>
                <ProtectedNav />
            </div>
            <div className='h-screen w-full mt-20'>
                <div className='flex flex-col'>
                    <div className='text-center'>
                        {loading && <Loader />}
                    </div>
                    {/* display all messages */}
                    <div className='flex-1 p-4 mb-20'>
                        {
                            Array.isArray(chatstate.chats) && chatstate.chats.length > 0 ?
                                chatstate.chats.map((item, index) => (
                                    item["userid"] === user.$id ?
                                        (<div className="chat chat-end" key={item.$id}>
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                            <div className="chat-header flex  items-center gap-3">
                                                <h5>{item["name"]}</h5>
                                                <time className="text-xs opacity-50">{new Date(item["$createdAt"]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>

                                            </div>
                                            <div className="chat-bubble chat-bubble-error text-white">{item["message"]}</div>
                                            <div className="chat-footer opacity-50">
                                                Seen at 12:46
                                            </div>
                                        </div>)
                                        :
                                        <div className="chat chat-start" key={item.$id}>
                                            <div className="chat-image avatar">
                                                <div className="w-10 rounded-full">
                                                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                            </div>
                                            <div className="chat-header flex items-center gap-3">
                                                <h5>{item["name"]}</h5>

                                                <time className="text-xs opacity-50">{new Date(item["$createdAt"]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</time>
                                            </div>
                                            <div className="chat-bubble ">{item["message"]}</div>
                                        </div>
                                )) : <div>
                                    <h5>Write the first one to send message...</h5>
                                </div>
                        }
                    </div>
                    {/* input box */}
                    <div className='p-4 bottom-0 left-0 right-0 bg-white fixed'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex items-center space-x-2'>
                                <Input type='text' label="Message" value={message} onChange={(e) => setmessage(e.target.value)} />
                                <button className='bg-blue-500 p-4 rounded-full' type='submit'>
                                    <SendHorizonal className='text-white' />
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Groupchat