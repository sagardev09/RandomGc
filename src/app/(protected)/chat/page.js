"use client"
import React from 'react'
import { account } from '@/app/config/AppwriteConfig'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { userStore } from '@/app/State/UserStore'
import ProtectedNav from '@/app/components/ProtectedNav'
import CreateGroup from '@/app/components/CreateGroup'
import Grouplist from '@/app/components/Grouplist'

const Chat = () => {

    const router = useRouter()
    const userState = userStore()
    const isRendered = useRef(null)
    useEffect(() => {
        if (!isRendered.current) {
            account
                .get()
                .then((res) => {
                    userState.updateUser(res);
                })
                .catch(() => {
                    userState.resetState();
                    router.push("/login")
                    toast.error("Your session got expired.please login again", {
                        theme: "colored",
                    });
                });
            isRendered.current = true;
        }
    }, [])
    return (
        <div className='px-8 py-2 h-screen w-screen'>
            <ProtectedNav />
            <div className='flex justify-end py-3'>
                <CreateGroup />
            </div>
            <div>
                <Grouplist />
            </div>
        </div>
    )
}

export default Chat