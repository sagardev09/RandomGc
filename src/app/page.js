"use client"
import Image from 'next/image'
import LandingNavbar from './components/LandingNavbar'


export default function Home() {


  return (
    <>

      <main className='flex flex-col min-h-screen w-screen px-8'>
        <LandingNavbar />
        <h1 className='text-[100px] uppercase'>Landing page</h1>
      </main>

    </>

  )
}
