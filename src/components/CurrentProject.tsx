'use client'

import { FaGithub, FaTrello, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'




export default function CurrentProject() {

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })


  const technologies = [
    { name: 'React', icon: <FaReact className="text-4xl" />, description: 'JavaScript library for user interfaces' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-4xl" />, description: 'React framework' },
    { name: 'MongoDB', icon: <SiMongodb className="text-4xl" />, description: 'NoSQL database' },
    { name: 'TailwindCSS', icon: <SiTailwindcss className="text-4xl" />, description: 'CSS framework' },
  ]

  return (
    <section id="current-project" className="py-20 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-yellow-500"
        >
          Current Project - eCommerce Store E2E
        </motion.h2>
        <div className="md:flex md:justify-between md:items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 mb-8 md:w-2/3 space-y-4"
          >
            <p className="text-lg leading-relaxed">
              This project involves building a <span className="text-yellow-500">full-stack</span> eCommerce store with an admin panel, using Next.js, React, MongoDB, and TailwindCSS for styling.
            </p>
            <p className="text-lg leading-relaxed">
              The <span className="text-yellow-500">admin panel</span> features a dashboard to track orders and revenue, alongside product and category <span className="text-yellow-500">management</span> (add, edit, view, delete).
              The order page allows you to view and mark orders as shipped.
            </p>
            <p className="text-lg leading-relaxed">
              On the <span className="text-yellow-500">front-end</span>, users can explore featured products, add items to the cart, <span className="text-yellow-500">filter</span> by category, and manage their orders and watchlist on the account page.
              The cart page includes a checkout function with <span className="text-yellow-500">automatic price calculation.</span>
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/3 flex flex-col items-end space-y-4"
          >
            <ProjectLink 
              href="https://trello.com/b/9exaNoHi/ecommerce"
              icon={<FaTrello className="text-3xl" />}
              text="Track project progress"
              label="Trello"
            />
            <ProjectLink 
              href="https://github.com/Gamalina/Nextjs-Ecommerce"
              icon={<FaGithub className="text-3xl" />}
              text="View the code"
              label="GitHub"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <div className="text-yellow-500 mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{tech.name}</h3>
              <p className="text-gray-300">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  label: string;
}

function ProjectLink({ href, icon, text, label }: ProjectLinkProps) {
  return (
    <motion.a 
      href={href}
      className="group flex items-center space-x-4 bg-gray-700 rounded-lg p-4 transition-all duration-300 hover:bg-gray-600 hover:shadow-lg w-full"
      aria-label={label}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-yellow-500 group-hover:text-yellow-400 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-gray-300 group-hover:text-white transition-colors">{text}</p>
        <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{label}</p>
      </div>
    </motion.a>
  )
}