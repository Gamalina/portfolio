import Image from 'next/image'
import profilePic from '@/public/Myself-bgremoved.png'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-900">
      <div className="md:w-2/4 p-10">
        <h1 className="text-4xl font-bold mb-4">
          I'm <span className="text-yellow-500">Daniel Rud Callesen</span> a passionated <span className="text-yellow-500">Software Developer</span>
        </h1>
        <p className="text-lg mb-6 lg:w-[90%]">A dedicated and enthusiastic Software Developer with over 2 years of
          experience in C# development and cloud technologies. Proficient in
          Azure, API integration, and Agile methodologies. Possess a strong
          foundation in computer science with hands-on experience in the entire
          software development lifecycle, from initial design to deployment and
          maintenance. Excel at collaborating with cross-functional teams to
          deliver innovative solutions.</p>
        <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors">
          Contact Me
        </button>
      </div>
      <div className="md:w-1/4 p-10">
        <Image
          src={profilePic}
          alt="Daniel Rud Callesen"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
    </section>
  );
}