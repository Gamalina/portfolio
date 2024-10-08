import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Workexperience from '@/components/Workexperience'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Workexperience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      </div>
  )
}