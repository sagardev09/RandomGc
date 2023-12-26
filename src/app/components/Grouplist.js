"use client"
import React, { useEffect, useRef, useState } from 'react'
import { databases } from '../config/AppwriteConfig'
import { Query } from 'appwrite'
import { GroupStore } from '../State/GroupStore'
import Loader from './Spinner'
import { Button, Card, CardBody } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

const Grouplist = () => {

    const isDataFetched = useRef(false)
    const router = useRouter()
    const [loading, setloading] = useState(false)
    const groupstore = GroupStore()
    useEffect(() => {

        if (!isDataFetched.current) {

            getGroupsdata()

            isDataFetched.current = true
        }

    }, [])

    const getGroupsdata = async () => {
        setloading(true)
        try {
            const res = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_GROUP_COLLECTION_ID,
                [
                    Query.select(["$id", "name"])
                ])
            groupstore.addGroups(res.documents)
            console.log(res);
            setloading(false);
        } catch (error) {
            setloading(false)
            console.log(error);
        }
        setloading(false)
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
                        <Card key={item.$id}>
                            <CardBody className='p-3'>
                                <h1>{item["name"]}</h1>
                                <h5 className='text-xs py-2'>Find More people like you</h5>
                                <Button color="primary" onClick={() => router.push("/chat/" + item?.$id)}>Join Now</Button>
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