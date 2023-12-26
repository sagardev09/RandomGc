"use client"
import React, { useEffect, useRef, useState } from 'react'
import { client, databases } from '../config/AppwriteConfig'
import { Query } from 'appwrite'
import { GroupStore } from '../State/GroupStore'
import Loader from './Spinner'
import { Button, Card, CardBody, Input } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { MoreHorizontal, Trash } from 'lucide-react'
import { toast } from 'react-toastify'
import { userStore } from '../State/UserStore'

const Grouplist = () => {

    const isDataFetched = useRef(false)
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const groupstore = GroupStore()
    const user = userStore((state) => state.user)
    const [Password, setPassword] = useState("")
    const [privatepassword, setprivatepassword] = useState("")

    useEffect(() => {

        if (!isDataFetched.current) {
            getGroupsdata()
            isDataFetched.current = true
        }


    }, [])


    const getGroupsdata = async () => {
        setloading(true);
        try {
            const res = await databases.listDocuments(
                process.env.NEXT_PUBLIC_DATABASE_ID,
                process.env.NEXT_PUBLIC_GROUP_COLLECTION_ID,
                [Query.select(["$id", "name", "adminid", "password"])]
            );
            console.log(res.documents);
            groupstore.addGroups(res.documents);

            setloading(false);
        } catch (error) {
            console.error("Error fetching groups:", error); // Log any errors
            setloading(false);
        }
    };

    const handledelete = async (id, adminid) => {
        if (user?.$id === adminid) {
            try {
                await databases.deleteDocument(
                    process.env.NEXT_PUBLIC_DATABASE_ID,
                    process.env.NEXT_PUBLIC_GROUP_COLLECTION_ID,
                    id
                );
                groupstore.deleteGroup(id);
                toast.success("Group deleted", { theme: "colored" });
            } catch (error) {
                toast.error(error.message, { theme: "colored" });
            } finally {
                getGroupsdata();
            }
        } else {
            toast.error("Only admins can delete the group", { theme: "colored" });
        }
    };


    const handleGroups = async (id) => {

        router.push("/chat/" + id)
        console.log(id);
    }

    return (
        <div>
            <div className='text-center'>
                {" "}
                {
                    loading && <Loader />
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 mt-4'>
                {Array.isArray(groupstore.groups) && groupstore.groups.length > 0 ? (
                    groupstore.groups.map((item, index) => (
                        <Card key={item.$id} className='h-auto'>
                            <CardBody className='p-3'>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h1>{item["name"]}</h1>
                                        <h5 className='text-xs py-2'>Find More people like you</h5>
                                    </div>
                                    <div className='flex items-center space-x-4'>
                                        <MoreHorizontal className='cursor-pointer' />
                                        <Trash className='cursor-pointer'
                                            onClick={() => handledelete(item.$id, item.adminid)} />
                                    </div>
                                </div>
                                <div className='w-full'>
                                    {/* {item.password && item.password.length > 0 && (
                                        <Input type='password' value={Password} onChange={(e) => setPassword(e.target.value)} label='Password' className='my-3' />
                                    )} */}
                                    <Button
                                        color='primary'
                                        className='w-full'
                                        onClick={() => handleGroups(item?.$id)}
                                    >
                                        Join Now
                                    </Button>
                                </div>
                            </CardBody>

                        </Card>
                    ))
                ) : (
                    <p>No groups available.</p>
                )}
            </div>
        </div>
    )
}

export default Grouplist