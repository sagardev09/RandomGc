"use client"
import Image from 'next/image'
import LandingNavbar from './components/LandingNavbar'
import Header from './components/Header'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Stats from './components/Stats'
import CTA from './components/CTA'
import Pricing from './components/Pricing'
import Faq from './components/Faq'


export default function Home() {


  return (
    <>
      <main className='flex flex-col min-h-screen w-screen'>
        <div className='px-8 py-2'>
          <LandingNavbar />
        </div>
        <div>
          <Header />
          <Stats />
          <CTA />
          <Pricing />
          <Testimonials />
          <Faq />
          <Footer />
        </div>
      </main>

    </>

  )
}
