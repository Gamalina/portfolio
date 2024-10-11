"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Olga from "@/public/Migogolga.jpg";
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section id="about" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-yellow-500"
        >
          About Me
        </motion.h2>
        <div className="md:flex md:items-center md:space-x-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-2/3 text-gray-300 space-y-4"
          >
            <p className="text-lg leading-relaxed">
              I'm <span className="text-yellow-500">Daniel</span>, a{" "}
              <span className="text-yellow-500">software developer</span> from
              Roskilde with a passion for building applications. I'm eager to
              learn new technologies and stay up to date, I enjoy working across
              the full stack, from designing{" "}
              <span className="text-yellow-500">system architecture</span> to
              ensuring smooth user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              Whether it's diving into{" "}
              <span className="text-yellow-500">C#, JavaScript</span> or any
              other programming language, I love creating{" "}
              <span className="text-yellow-500">clean</span>, efficient code
              that delivers. I'm keen about collaborating with teams to push the
              boundaries of what we can achieve{" "}
              <span className="text-yellow-500">together.</span>
            </p>
            <p className="text-lg leading-relaxed">
              At the same time, I'm{" "}
              <span className="text-yellow-500">self-driven</span> and capable
              of independently managing projects from idea to execution. Outside
              of work, you can find me spending hours on end programming and
              researching various topics,{" "}
              <span className="text-yellow-500">gaming,</span> or spending time
              with my fiancée and my dog,{" "}
              <span className="text-yellow-500">Olga.</span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/3 mt-8 md:mt-0 flex justify-center"
          >
            <Image
              src={Olga}
              alt="Daniel Rud Callesen"
              width={300}
              height={300}
              className="rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
