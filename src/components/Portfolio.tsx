import Image from 'next/image'
import WorkinProgress from '@/public/Workinprogress.jpg'

export default function Portfolio() {
  const projects = [
    { title: 'Zombie Harvester Game', image: WorkinProgress, link: 'https://github.com/Gamalina/TCPEchoServer' },
    { title: 'Online Chat Application', image: WorkinProgress, link: 'https://github.com/Gamalina/OnlineChatApplication' },
    { title: 'World of Warcraft API', image: WorkinProgress, link: 'https://github.com/Gamalina/WoW-Project' },
    { title: 'TCPEchoServer', image: WorkinProgress, link: 'https://github.com/Gamalina/TCPEchoServer' },
    
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Portfolio</h2>
        <h4 className="text-1xl font-bold mb-4 text-center">Work in Progress! As I have worked mainly with Back-end there are no GUI&apos;s in these projects.</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a
                  href={project.link}
                  className="text-yellow-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}