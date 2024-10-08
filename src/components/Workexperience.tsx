import { FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa'

export default function ExperienceEducation() {
  const experiences = [
    {
      title: "Internship",
      company: "JN Data",
      period: "October 2023 – February 2024",
      details: [
        "Developed a robust MVC web application using C# in the .NET Framework, integrating Azure Database and Azure Active Directory for seamless data management.",
        "Gathered and processed data through REST APIs, ensuring efficient data flow and functionality.",
        "Designed system architecture using UML diagrams and performed rigorous unit testing to ensure high-quality code.",
        "Collaborated with cross-functional teams to deliver projects on time and within scope."
      ]
    }
  ]
  const certificates = [
    {
      title: "Azure Fundamentals AZ-900",
      company: "Microsoft",
      period: "May 2024 –  June 2024",
      details: [
        "Understanding cloud computing, its benefits and different cloud models.",
        "An overview of Azure’s core services, including compute (VMs, Azure App Service), storage, networking, and databases.",
        "Azure's security features, compliance standards, and shared responsibility model. Also learned about privacy policies and data governance.",
        "Basics of Azure pricing models, cost management, and available support plans.",
        "Intro to Azure management tools like Azure Portal, Azure CLI, and other core solutions like AI and machine learning, IoT, and DevOps."
      ],
      certiLink: "https://learn.microsoft.com/api/credentials/share/en-us/DanielRudCallesen-7470/415D2E1EF09A0E57?sharingId=D7A246824E173D54"
    }
  ]

  const education = [
    {
      degree: "AP-Degree in Computer Science",
      institution: "Zealand Erhvervsakademi",
      period: "September 2021 - February 2024",
      details: [
        "Gained a solid foundation in algorithms, data structures, and software development.",
        "Completed electives in Advanced Software Construction, IT-Security, and Game Development.",
        "Developed and maintained various applications as part of coursework."
      ]
    },
    {
      degree: "Web-Integrator",
      institution: "Viden Djurs",
      period: "September 2017 to November 2019",
      details: [
        "Specialized in web design concepts and the use of frameworks to streamline design processes.",
        "Completed a comprehensive course in Umbraco, enhancing my web development skills."
      ]
    }
  ]

  return (
    <section id="workexperience"className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience & Education</h2>
        
        {/* Work Experience */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <FaBriefcase className="mr-2 text-yellow-500" />
            Work Experience
          </h3>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <h4 className="text-xl font-semibold">{exp.title}</h4>
              </div>
              <p className="text-gray-400 mb-2">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside text-gray-300">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="mb-1">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
{/* Certificates*/}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <FaCertificate className="mr-2 text-yellow-500" />
            Certificates
          </h3>
          {certificates.map((certi, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <h4 className="text-xl font-semibold">{certi.title}</h4>
              </div>
              <p className="text-gray-400 mb-2">{certi.company} | {certi.period}</p>
              <p className="mb-2 underline text-yellow-500"> 
              <a href={certi.certiLink}className="mb-1">Certification Link</a>
              </p>
              <ul className="list-disc list-inside text-gray-300">
                {certi.details.map((certi, idx) => (
                  <li key={idx} className="mb-1">{certi}</li>
                ))}
                
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <FaGraduationCap className="mr-2 text-yellow-500" />
            Education
          </h3>
          {education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
              </div>
              <p className="text-gray-400 mb-2">{edu.institution} | {edu.period}</p>
              <ul className="list-disc list-inside text-gray-300">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="mb-1">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}