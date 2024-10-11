"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  link: string;
  rating: number;
}

interface Software {
  name: string;
  icon: string;
  link: string;
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [showAllSoftware, setShowAllSoftware] = useState(false);

  const skills: Skill[] = [
    {
      name: "C#",
      icon: "https://cdn3.iconfinder.com/data/icons/ink-file-type/38/file-csharp-512.png",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      rating: 5,
    },
    {
      name: "ASP.NET",
      icon: "https://raw.githubusercontent.com/dotnet/brand/main/logo/dotnet-logo.png",
      link: "https://dotnet.microsoft.com/en-us/apps/aspnet",
      rating: 5,
    },
    {
      name: "Restful API",
      icon: "https://cdn0.iconfinder.com/data/icons/buno-api/32/api_interface_settings-512.png",
      link: "https://www.ibm.com/topics/rest-apis",
      rating: 4,
    },
    {
      name: "JavaScript",
      icon: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png",
      link: "https://www.javascript.com/",
      rating: 3,
    },
    {
      name: "React",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      link: "https://react.dev/",
      rating: 3,
    },
    {
      name: "Next.js",
      icon: "https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/nextjs-512.png",
      link: "https://nextjs.org/",
      rating: 3,
    },
    {
      name: "SQL",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png",
      link: "https://en.wikipedia.org/wiki/SQL",
      rating: 4,
    },
    {
      name: "MongoDB",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-512.png",
      link: "https://www.mongodb.com/",
      rating: 2,
    },
  ];

  const software: Software[] = [
    {
      name: "Visual Studio",
      icon: "https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Visual_Studio.png",
      link: "https://visualstudio.microsoft.com/",
    },
    {
      name: "Azure",
      icon: "https://cdn0.iconfinder.com/data/icons/social-network-9/50/37-512.png",
      link: "https://azure.microsoft.com/en-us",
    },
    {
      name: "Docker",
      icon: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_docker-512.png",
      link: "https://www.docker.com/",
    },
    {
      name: "Trello",
      icon: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-512.png",
      link: "https://trello.com/",
    },
    {
      name: "Jira",
      icon: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/184_Jira_logo_logos-512.png",
      link: "https://www.atlassian.com/software/jira",
    },
    {
      name: "Draw.io",
      icon: "https://raw.githubusercontent.com/jgraph/drawio-desktop/7945aa1ca0aa15d79b1c67554c0b5bd0f6bb8d41/build/icon.svg",
      link: "https://www.drawio.com/",
    },

    {
      name: "Visual Studio Code",
      icon: "https://cdn1.iconfinder.com/data/icons/unicons-line-vol-6/24/visual-studio-512.png",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "Slack",
      icon: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Slack_colored_svg-512.png",
      link: "https://slack.com/",
    },
    {
      name: "Teams",
      icon: "https://cdn0.iconfinder.com/data/icons/logos-microsoft-office-365/128/Microsoft_Office-10-512.png",
      link: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
    },
    {
      name: "Git",
      icon: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png",
      link: "https://git-scm.com/",
    },
    {
      name: "G-suite",
      icon: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/76-office-512.png",
      link: "https://outlook.live.com/",
    },
    {
      name: "Confluence",
      icon: "https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_confluence-512.png",
      link: "https://www.atlassian.com/software/confluence",
    },
  ];

  skills.sort((a, b) => b.rating - a.rating);

  const renderProgressBar = (rating: number) => {
    const percentage = (rating / 5) * 100;
    return (
      <div className="w-full mt-2">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-yellow-500">Weakest</span>
          <span className="text-xs font-medium text-yellow-500">
            Strongest
          </span>
        </div>
        <div className="w-full bg-gray-900 rounded-full h-2.5">
          <div
            className="bg-yellow-500 h-2.5 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills-&-software" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-yellow-500"
        >
          Skills
        </motion.h2>
        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold mb-12 text-center text-white"
        >
          Disclaimer: <br /> There is still knowledge to be obtained and
          technique to be improved! These ratings are to indicate what I&apos;m
          best at.
        </motion.h5>
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
                  <p className="text-lg font-semibold text-white">
                    {skill.name}
                  </p>
                  {renderProgressBar(skill.rating)}
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
          className="text-4xl font-bold mb-12 text-center mt-16 text-yellow-500"
        >
          Software
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-6 gap-6"
        >
          {software
            .slice(0, showAllSoftware ? software.length : 6)
            .map((sw, index) => (
              <motion.div
                key={sw.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
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
                    <p className="text-lg font-semibold text-white">
                      {sw.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
        </motion.div>
        {!showAllSoftware && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setShowAllSoftware(true)}
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors"
            >
              Load More
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
