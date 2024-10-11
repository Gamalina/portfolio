"use client";

import Image from "next/image";
import profilePic from "@/public/Me.jpg";
import backgroundImage from "@/public/Background7.jpg";
import { FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-900 px-4 md:px-10 overflow-hidden pt-10 md:pt-0"
      ref={ref}
    >
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-85"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          I&apos;m <span className="text-yellow-500">Daniel Rud Callesen</span>{" "}
          a passionate{" "}
          <span className="text-yellow-500">Software Developer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg mb-6 lg:w-[90%] text-white"
        >
          A dedicated Software Developer with experience in C# development and
          cloud technologies. Proficient in Azure, API integration, and Agile
          methodologies. Hands-on experience in the entire software development
          lifecycle, from initial design to deployment and maintenance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          {[
            "About",
            "Current Project",
            "Skills & Software",
            "Portfolio",
            "Experience",
            "Contact Me",
          ].map((section) => (
            <button
              key={section}
              onClick={() =>
                scrollToSection(section.toLowerCase().replace(/ /g, "-"))
              }
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-600 transition-colors"
            >
              {section}
            </button>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:w-1/3 flex justify-center items-center mt-10 md:mt-0 z-10 pb-10 md:pt-0"
      >
        <Image
          src={profilePic}
          alt="Daniel Rud Callesen"
          width={650}
          height={650}
          className="rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative right-10 bottom-14 transform -translate-y-16 flex flex-col items-center z-10"
        >
          <div className="space-y-4">
            <a
              href="https://linkedin.com/in/danielcallesen"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://github.com/Gamalina"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="mailto:danielrudcallesen96@gmail.com"
              className="text-white hover:text-yellow-500 transition-colors"
            >
              <FaMailBulk size={30} />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
