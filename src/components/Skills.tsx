import Image from 'next/image'
import Link from 'next/link'

interface Skill {
  name: string;
  icon: string;
  link: string;
}
export default function Skills() {
  const skills : Skill[] = [
    { name: 'C#', icon: 'https://cdn3.iconfinder.com/data/icons/ink-file-type/38/file-csharp-512.png', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
    { name: 'ASP.NET', icon: 'https://raw.githubusercontent.com/dotnet/brand/main/logo/dotnet-logo.png', link: 'https://dotnet.microsoft.com/en-us/apps/aspnet' },
    { name: 'Restful API', icon: 'https://cdn0.iconfinder.com/data/icons/buno-api/32/api_interface_settings-512.png', link: 'https://www.ibm.com/topics/rest-apis' },
    { name: 'JavaScript', icon: 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png', link: 'https://www.javascript.com/' },
    { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', link: 'https://react.dev/' },
    { name: 'Next.js', icon: 'https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/nextjs-512.png', link: 'https://nextjs.org/' },
    { name: 'SQL', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png', link: 'https://en.wikipedia.org/wiki/SQL' },
    { name: 'MongoDB', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png', link: 'https://www.mongodb.com/' },
    { name: 'Azure', icon: 'https://cdn0.iconfinder.com/data/icons/social-network-9/50/37-512.png', link: 'https://azure.microsoft.com/en-us' },
    { name: 'Git', icon: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png', link: 'https://git-scm.com/' },
    { name: 'Docker', icon: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-512.png', link: 'https://www.docker.com/' },
    { name: 'Jira', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/184_Jira_logo_logos-512.png', link: 'https://www.atlassian.com/software/jira' },
    { name: 'Confluence', icon: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_confluence-512.png', link: 'https://www.atlassian.com/software/confluence' },
    { name: 'Postman', icon: 'https://cdn0.iconfinder.com/data/icons/seo-color-2/48/http_planet-512.png', link: 'https://www.postman.com/' },
  ]


  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Skills & Software
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <Link href={skill.link} key={skill.name}>
              <div
              key={skill.name}
              className="bg-gray-800 p-4 rounded-lg text-center flex flex-col items-center"
            >
              <Image
                src={skill.icon}
                alt={`${skill.name} icon`}
                width={64}
                height={64}
                className="mb-2"
              />
              
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}