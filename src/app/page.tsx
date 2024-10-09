import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'))
const Hero = dynamic(() => import('@/components/Hero'))
const Skills = dynamic(() => import('@/components/Skills'))
const Portfolio = dynamic(() => import('@/components/Portfolio'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))
const Workexperience = dynamic(() => import('@/components/Workexperience'))
const About = dynamic(() => import('@/components/About'))
const CurrentProject = dynamic(() => import('@/components/CurrentProject'))


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <CurrentProject />
      <Skills />
      <Portfolio />
      <Workexperience />
      <Footer />
      </div>
  )
}