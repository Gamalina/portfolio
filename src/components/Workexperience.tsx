"use client";

import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceEducation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  const contactInfo = {
    email: "danielrudcallesen96@gmail.com",
    phone: "+45 24 76 11 97",
    linkedin: "https://www.linkedin.com/in/danielcallesen/",
  };

  const experiences = [
    {
      title: "Internship",
      company: "JN Data",
      period: "October 2023 – February 2024",
      details: [
        "Developed a robust MVC web application using C# in the .NET Framework, integrating Azure Database and Azure Active Directory for seamless data management.",
        "Gathered and processed data through REST APIs, ensuring efficient data flow and functionality.",
        "Designed system architecture using UML diagrams and performed rigorous unit testing to ensure high-quality code.",
        "Collaborated with cross-functional teams to deliver projects on time and within scope.",
      ],
    },
  ];

  const certificates = [
    {
      title: "Azure Fundamentals AZ-900",
      company: "Microsoft",
      period: "May 2024 –  June 2024",
      details: [
        "Understanding cloud computing, its benefits and different cloud models.",
        "An overview of Azure's core services, including compute (VMs, Azure App Service), storage, networking, and databases.",
        "Azure's security features, compliance standards, and shared responsibility model. Also learned about privacy policies and data governance.",
        "Basics of Azure pricing models, cost management, and available support plans.",
        "Intro to Azure management tools like Azure Portal, Azure CLI, and other core solutions like AI and machine learning, IoT, and DevOps.",
      ],
      certiLink:
        "https://learn.microsoft.com/api/credentials/share/en-us/DanielRudCallesen-7470/415D2E1EF09A0E57?sharingId=D7A246824E173D54",
    },
  ];

  const education = [
    {
      degree: "AP-Degree in Computer Science",
      institution: "Zealand Erhvervsakademi",
      period: "September 2021 - February 2024",
      details: [
        "Gained a solid foundation in algorithms, data structures, and software development.",
        "Completed electives in Advanced Software Construction, IT-Security, and Game Development.",
        "Developed and maintained various applications as part of coursework.",
      ],
    },
    {
      degree: "Web-Integrator",
      institution: "Viden Djurs",
      period: "September 2017 to November 2019",
      details: [
        "Specialized in web design concepts and the use of frameworks to streamline design processes.",
        "Completed a comprehensive course in Umbraco, enhancing my web development skills.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-yellow-500"
        >
          Experience & Education
        </motion.h2>

        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 md:mt-0 mt-8"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
                <FaBriefcase className="mr-2 text-yellow-500" />
                Work Experience
              </h3>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <h4 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <ul className="list-disc list-inside text-gray-300">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="mb-1">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="w-full md:w-1/3">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
              id="contact-me"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center text-white">
                <FaEnvelope className="text-yellow-500 mr-2" />
                Contact Information
              </h3>
              <p className="text-gray-400 text-center mb-4">
                Feel free to reach out to me through any of these platforms.
                I&apos;m always open to new opportunities and collaborations!
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <FaEnvelope className="text-yellow-500 mr-2" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <FaPhone className="text-yellow-500 mr-2" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <FaLinkedin className="text-yellow-500 mr-2" />
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Certificates and Education side by side */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
              <FaCertificate className="mr-2 text-yellow-500" />
              Certificates
            </h3>
            {certificates.map((certi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="mb-6"
              >
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <h4 className="text-xl font-semibold text-white">
                    {certi.title}
                  </h4>
                </div>
                <p className="text-gray-400 mb-2">
                  {certi.company} | {certi.period}
                </p>
                <p className="mb-2">
                  <a
                    href={certi.certiLink}
                    className="underline text-yellow-500 hover:text-yellow-400 transition-colors"
                  >
                    Certification Link
                  </a>
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  {certi.details.map((detail, idx) => (
                    <li key={idx} className="mb-1">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-white">
              <FaGraduationCap className="mr-2 text-yellow-500" />
              Education
            </h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="mb-6"
              >
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <h4 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h4>
                </div>
                <p className="text-gray-400 mb-2">
                  {edu.institution} | {edu.period}
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="mb-1">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}