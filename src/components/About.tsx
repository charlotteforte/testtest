import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { slideUp, opacity } from '../animations'

const About = () => {
  const description = useRef<HTMLDivElement>(null)
  const isInView = useInView(description)

  const phrase = "We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. With years of expertise in custom development, we transform complex ideas into elegant, functional solutions."
  const paragraph = "Our approach combines technical excellence with creative innovation, ensuring every project we deliver exceeds expectations and drives real results."

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={description}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-terros-blue mb-6">
              About Terros
            </h2>
            <div className="text-lg text-black mb-6">
              <p>
                {phrase.split(" ").map((word: string, index: number) => (
                  <span key={index} className="inline-block overflow-hidden">
                    <motion.span
                      variants={slideUp(index)}
                      initial="initial"
                      animate={isInView ? "open" : "closed"}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                ))}
              </p>
            </div>
            <div className="text-lg text-black mb-8">
              <p>
                {paragraph.split(" ").map((word: string, index: number) => (
                  <span key={index} className="inline-block overflow-hidden">
                    <motion.span
                      variants={slideUp(index + phrase.split(" ").length)}
                      initial="initial"
                      animate={isInView ? "open" : "closed"}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  </span>
                ))}
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-terros-mint mb-2">100+</div>
                <div className="text-gray-600">Projets Réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-terros-mint mb-2">50+</div>
                <div className="text-gray-600">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-terros-mint mb-2">100k+</div>
                <div className="text-gray-600">Utilisateurs</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div 
              className="rounded-2xl p-8 text-white"
              style={{
                background: 'radial-gradient(134.26% 206.72% at 50% 224.56%, #7ED7C1 46.6%, #31D3AE 68.83%, #58739C 100%)'
              }}
            >
              <h3 className="text-2xl font-medium mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terros-mint rounded-full mr-3"></span>
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terros-mint rounded-full mr-3"></span>
                  Cutting-edge technologies and best practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terros-mint rounded-full mr-3"></span>
                  Dedicated support throughout the project
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-terros-mint rounded-full mr-3"></span>
                  On-time delivery and transparent communication
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
