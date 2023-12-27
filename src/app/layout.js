import { Inter } from 'next/font/google'
import './globals.css'
import { NextUiProviders } from './NextUiProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat app',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <NextUiProviders>
          {children}
        </NextUiProviders>
      </body>
    </html>
  )
}
