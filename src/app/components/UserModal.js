"use client"
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { account } from "../config/AppwriteConfig";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "./Spinner";

export default function UserModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const handlelogout = async () => {
        setLoading(true)
        try {
            await account.deleteSession("current")
            toast.success("successfully logged out", { theme: "colored" })
            router.push("/")
        } catch (error) {
            toast.error(error, { theme: "colored" })
            setLoading(false)
        }
        setLoading(false)
    }

    return (
        <>
            <Button onPress={onOpen} color="danger" variant="flat">
                Logout
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log out</ModalHeader>
                            <ModalBody>
                                <h5>Are you sure you want to logout 🥹🥹</h5>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    cancel
                                </Button>
                                {loading ? <Loader /> : <Button color="primary" onPress={handlelogout}>
                                    logout
                                </Button>}
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
