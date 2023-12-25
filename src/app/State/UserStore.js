import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const userStore = create(
    devtools(
        persist(
            (set) => ({
                userSession: {},
                user: {},
                updateUserSession: (session) =>
                    set(() => ({
                        userSession: session,
                    })),
                updateUser: (user) =>
                    set(() => ({
                        user: user,
                    })),
                resetState: () =>
                    set(() => ({
                        user: {},
                        userSession: {},
                    })),
            }),
            { name: "chat_app_user_store" }
        )
    )
);
