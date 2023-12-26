import { create } from "zustand";
import { devtools } from "zustand/middleware";


export const GroupStore = create()(
    devtools((set) => ({
        groups: [],
        addGroup: (data) =>
            set((state) => ({
                groups: [data, ...state.groups],
            })),
        addGroups: (data) =>
            set(() => ({
                groups: data,
            })),
        deleteGroup: (id) =>
            set((state) => ({
                chats: state.groups.filter((item) => item.$id !== id),
            })),
    }))
);