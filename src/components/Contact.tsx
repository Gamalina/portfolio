import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import ContactForm from './Contactform'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <ContactForm />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-6 mb-4">
              <a href="https://linkedin.com/in/danielcallesen" className="text-2xl hover:text-yellow-500 transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Gamalina" className="text-2xl hover:text-yellow-500 transition-colors" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
            <p className="text-gray-400">Feel free to reach out to me through any of these platforms.</p>
            <p className="text-gray-400">I'm always open to new opportunities and collaborations!</p>
          </div>
        </div>
      </div>
    </section>
  )
}