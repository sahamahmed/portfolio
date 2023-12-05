
import Image from 'next/image'
import Banner from '@/components/Banner'
import Aboutme from '@/components/Aboutme'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className='w-full bg-gray-900 text-gray-300 px-4'>
      <div className='max-w-screen-xl mx-auto lg:pt-10 '>
        <Banner />
        <Aboutme />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
   
      </div>
    </main>
  )
}
