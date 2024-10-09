"use client"

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

interface Skill {
  name: string
  icon: string
  link: string
  rating: number
}

interface Software {
  name: string
  icon: string
  link: string
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  const skills: Skill[] = [
    { name: 'C#', icon: 'https://cdn3.iconfinder.com/data/icons/ink-file-type/38/file-csharp-512.png', link: 'https://learn.microsoft.com/en-us/dotnet/csharp/', rating: 2 },
    { name: 'ASP.NET', icon: 'https://raw.githubusercontent.com/dotnet/brand/main/logo/dotnet-logo.png', link: 'https://dotnet.microsoft.com/en-us/apps/aspnet', rating: 2 },
    { name: 'Restful API', icon: 'https://cdn0.iconfinder.com/data/icons/buno-api/32/api_interface_settings-512.png', link: 'https://www.ibm.com/topics/rest-apis', rating: 2 },
    { name: 'JavaScript', icon: 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png', link: 'https://www.javascript.com/', rating: 1 },
    { name: 'React', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png', link: 'https://react.dev/', rating: 1 },
    { name: 'Next.js', icon: 'https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/nextjs-512.png', link: 'https://nextjs.org/', rating: 1 },
    { name: 'SQL', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png', link: 'https://en.wikipedia.org/wiki/SQL', rating: 2 },
    { name: 'MongoDB', icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png', link: 'https://www.mongodb.com/', rating: 1 },
  ]

  const software: Software[] = [
    { name: 'Azure', icon: 'https://cdn0.iconfinder.com/data/icons/social-network-9/50/37-512.png', link: 'https://azure.microsoft.com/en-us'},
    { name: 'Git', icon: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png', link: 'https://git-scm.com/'},
    { name: 'Docker', icon: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-512.png', link: 'https://www.docker.com/' },
    { name: 'Jira', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/184_Jira_logo_logos-512.png', link: 'https://www.atlassian.com/software/jira' },
    { name: 'Confluence', icon: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_confluence-512.png', link: 'https://www.atlassian.com/software/confluence' },
    { name: 'Postman', icon: 'https://cdn0.iconfinder.com/data/icons/seo-color-2/48/http_planet-512.png', link: 'https://www.postman.com/' },
  ]

  skills.sort((a, b) => b.rating - a.rating)

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.175 0l-3.392 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.343 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      )
    }
    return (
      <div className="flex items-center">
        <span className="mr-2 text-yellow-500">Junior</span>
        {stars}
        <span className="ml-2 text-yellow-500">Senior</span>
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Skills
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={skill.link}>
                <div className="bg-gray-800 p-4 rounded-lg text-center flex flex-col items-center hover:bg-gray-700 transition-colors">
                  <Image
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <p className="text-lg font-semibold text-white">{skill.name}</p>
                  <div className="flex mt-2">{renderStars(skill.rating)}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        </div>
        <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl font-bold mb-12 text-center mt-16 text-white"
        >
          Software
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {software.map((sw, index) => (
            <motion.div
              key={sw.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <Link href={sw.link}>
                <div className="bg-gray-800 p-4 rounded-lg text-center flex flex-col items-center hover:bg-gray-700 transition-colors">
                  <Image
                    src={sw.icon}
                    alt={`${sw.name} icon`}
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <p className="text-lg font-semibold text-white">{sw.name}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}