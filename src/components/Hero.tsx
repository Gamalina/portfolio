import Image from 'next/image'
import profilePic from '@/public/static/Me.jpg'
import backgroundImage from '@/public/static/Background7.jpg' 
import { FaLinkedinIn,FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 px-4 md:px-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />

<div className="absolute inset-0 bg-black opacity-85"></div>
      {/* Content */}
      <div className="md:w-1/2 z-10">
        <h1 className="text-4xl font-bold mb-4 text-white">
          I&apos;m <span className="text-yellow-500">Daniel Rud Callesen</span> a passionate <span className="text-yellow-500">Software Developer</span>
        </h1>
        <p className="text-lg mb-6 lg:w-[90%] text-white">
          A dedicated and enthusiastic Software Developer with experience in C# development and cloud technologies. Proficient in
          Azure, API integration, and Agile methodologies. Possess a strong
          foundation in computer science with hands-on experience in the entire
          software development lifecycle, from initial design to deployment and
          maintenance.
        </p>
        <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors">
          Contact Me!
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0 z-10">
        <Image
          src={profilePic}
          alt="Daniel Rud Callesen"
          width={650}
          height={650}
          className="rounded-full"
        />
        <div className="relative right-10 transform -translate-y-16 flex flex-col items-center z-10">
        <div className="space-y-4">
          <a href="#" className="text-white hover:text-yellow-500 transition-colors">
            <FaLinkedinIn size={30} />
          </a>
          <a href="#" className="text-white hover:text-yellow-500 transition-colors">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
      </div>
      
    </section>
  );
}