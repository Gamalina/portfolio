"use client";

import Image from "next/image";
import WorkinProgress from "@/public/Workinprogress.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GameImage from "@/public/Zombie_Harvester_Game.png";

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const projects = [
    {
      title: "Ecommerce Store",
      image: WorkinProgress,
      link: "https://github.com/Gamalina/Nextjs-Ecommerce",
      description:
        "A full-stack ecommerce store with an admin panel. Built with Next.js, React, MongoDB, and TailwindCSS.",
    },
    {
      title: "Zombie Harvester Game",
      image: GameImage,
      link: "https://github.com/Gamalina/Zombie-Harvester",
      description:
        "A thrilling game where players can defend against zombie attacks. Built with Unity and C#.",
    },

    {
      title: "World of Warcraft API",
      image: WorkinProgress,
      link: "https://github.com/Gamalina/WoW-Project",
      description:
        "An API integration project that fetches and displays World of Warcraft game data. Built with C# and .NET.",
    },
    {
      title: "TCPEchoServer",
      image: WorkinProgress,
      link: "https://github.com/Gamalina/TCPEchoServer",
      description:
        "A TCP server implementation that echoes back client messages. Demonstrates network programming skills in C#.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-yellow-500"
        >
          Portfolio
        </motion.h2>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-bold mb-8 text-center text-gray-300"
        >
          Work in Progress!
        </motion.h4>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  className="text-yellow-500 hover:text-yellow-400 transition-colors inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
