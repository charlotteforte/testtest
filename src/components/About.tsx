import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-terros-blue mb-6">
              About Terros
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We are a team of passionate developers and designers dedicated to creating 
              exceptional digital experiences. With years of expertise in custom development, 
              we transform complex ideas into elegant, functional solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our approach combines technical excellence with creative innovation, 
              ensuring every project we deliver exceeds expectations and drives real results.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-terros-mint mb-2">50+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-terros-mint mb-2">5+</div>
                <div className="text-gray-600">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-terros-mint mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-terros-blue to-terros-light rounded-2xl p-8 text-white">
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
