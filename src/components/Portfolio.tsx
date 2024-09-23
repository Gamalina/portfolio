import Image from 'next/image'

export default function Portfolio() {
  const projects = [
    { title: 'Online Chat Application', image: '/placeholder.svg?height=300&width=400', link: 'https://github.com/Gamalina/OnlineChatApplication' },
    { title: 'Restful API with Blazor Assembly', image: '/placeholder.svg?height=300&width=400', link: 'https://github.com/Gamalina/WoW-Project' },
    { title: 'MVC Web Application', image: '/placeholder.svg?height=300&width=400', link: '#' },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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