"use client"
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import Loader from "./Spinner";
import { databases } from "../config/AppwriteConfig";
import { ID } from "appwrite";
import { GroupStore } from "../State/GroupStore";
import { userStore } from "../State/UserStore";
import { Eye } from "lucide-react";

export default function CreateGroup() {
    const groupstore = GroupStore()
    const user = userStore((state) => state.user.$id)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [loading, setloading] = useState(false)
    const [name, setname] = useState("")
    const [isPasswordEnable, setisPasswordEnable] = useState(false)
    const [password, setpassword] = useState("")
    const [PasswordInput, setPasswordInput] = useState(true)

    const handleSubmit = async () => {
        setloading(true)
        if (!name) {
            toast.error("Group Name is manodatory", { theme: "colored" })
            setloading(false)
            return
        }
        try {
            const res = await databases.createDocument(
                process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_GROUP_COLLECTION_ID, ID.unique(),
                {
                    name: name,
                    adminid: user,
                    password: password
                }
            )
            groupstore.addGroup(res)
            setname("")
            setpassword("")
            toast.success("Group created successfully", { theme: "colored" })
        } catch (error) {
            toast.error(error, { theme: "colored" })
            setloading(false)
        }
        setloading(false)
    }

    return (
        <>
            <Button onPress={onOpen} color="danger" className="text-white">Create Group</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Group Name</ModalHeader>
                            <ModalBody>
                                <Input value={name} onChange={(e) => setname(e.target.value)} type="text" label="Name" />
                                <div>
                                    <div className='gap-3 flex mt-5'>
                                        <input type="checkbox" onChange={() => setisPasswordEnable(!isPasswordEnable)} />
                                        <label>Make it Private</label>
                                    </div>
                                    {isPasswordEnable ? <div className='flex items-center gap-3'>
                                        <div className='border rounded-md w-full p-2 flex items-center justify-between'>
                                            <input type={PasswordInput ? "password" : "text"}
                                                className='disabled:text-gray-500 bg-transparent outline-none w-full'
                                                value={password}
                                                onChange={(e) => setpassword(e.target.value)} />
                                            <Eye className='text-gray-500 cursor-pointer' onClick={() => setPasswordInput(!PasswordInput)} />
                                        </div>
                                    </div> : null}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="success" className="text-white" onPress={handleSubmit}>
                                    {loading ? <Loader /> : "Create"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
