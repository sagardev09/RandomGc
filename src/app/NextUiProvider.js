// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'

export function NextUiProviders({ children }) {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    )
}