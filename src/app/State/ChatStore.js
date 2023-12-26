import { create } from "zustand";
import { devtools } from "zustand/middleware";



export const chatStore = create()(
    devtools((set) => ({
        chats: [],
        addChat: (data) =>
            set((state) => ({
                chats: [...state.chats, data],
            })),
        addChats: (data) =>
            set(() => ({
                chats: data,
            })),
        deleteChat: (id) =>
            set((state) => ({
                chats: state.chats.filter((item) => item.$id !== id),
            })),
    }))
);