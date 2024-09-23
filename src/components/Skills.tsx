import { url } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Skills() {
  const skills = [
    { name: 'C#', icon: 'https://private-user-images.githubusercontent.com/5116133/357008418-1baef3a3-8aa6-450c-b517-3cca25c1ae26.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjY4Mjc2NzEsIm5iZiI6MTcyNjgyNzM3MSwicGF0aCI6Ii81MTE2MTMzLzM1NzAwODQxOC0xYmFlZjNhMy04YWE2LTQ1MGMtYjUxNy0zY2NhMjVjMWFlMjYucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDkyMCUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA5MjBUMTAxNjExWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9OTE0ZTAzMWY4ZjY1NmZhZDRiOGM0Zjk2MDA5N2FiZjI3OGFjMDIxODcxYzFmZTc3NTUzZjY5MmI5ZjQ3NzRkOCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.wTYA_9Wrlcl0S6uJbJCFdNaJUs1mAYSh_Jm3YKp8I5c', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
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
    <section className="py-20 bg-gray-900">
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