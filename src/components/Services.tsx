import { motion, AnimatePresence } from 'framer-motion'
import { perspective } from '../animations'
import { useState } from 'react'

const services = [
  {
    title: 'Développement Web',
    description: 'Sites web modernes et responsives construits avec les dernières technologies',
    icon: '💻',
    features: ['React/Vue/Angular', 'Node.js/Python', 'Base de données', 'API REST/GraphQL'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Applications Mobile',
    description: 'Applications natives et cross-platform pour iOS et Android',
    icon: '📱',
    features: ['React Native', 'Flutter', 'iOS/Android natif', 'Progressive Web Apps'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Design UI/UX',
    description: 'Designs magnifiques et intuitifs qui améliorent l\'expérience utilisateur',
    icon: '🎨',
    features: ['Prototypage', 'Design System', 'Tests utilisateurs', 'Wireframing'],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'E-commerce',
    description: 'Boutiques en ligne puissantes qui stimulent les ventes et la croissance',
    icon: '🛒',
    features: ['Shopify/WooCommerce', 'Paiements sécurisés', 'Gestion inventaire', 'Analytics'],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Intelligence Artificielle',
    description: 'Solutions IA personnalisées pour automatiser et optimiser vos processus',
    icon: '🤖',
    features: ['Machine Learning', 'Chatbots', 'Analyse de données', 'Automatisation'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure cloud scalable et processus de déploiement automatisés',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD', 'Monitoring'],
    color: 'from-teal-500 to-blue-500'
  }
]

const Services = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-terros-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-terros-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-terros-mint/10 text-terros-blue rounded-full text-sm font-medium mb-4">
            Nos Services
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Solutions
            <span className="text-terros-mint"> complètes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous offrons des solutions digitales complètes adaptées aux besoins spécifiques de votre entreprise
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-terros-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredButton(`service-${index}`)}
                    onHoverEnd={() => setHoveredButton(null)}
                    className={`mt-6 w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white rounded-xl font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg relative overflow-hidden`}
                  >
                    <AnimatePresence mode="wait">
                      {hoveredButton === `service-${index}` && (
                        <motion.div
                          key={`service-${index}-hover`}
                          variants={perspective}
                          initial="initial"
                          animate="enter"
                          exit="exit"
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          En savoir plus
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <span className={hoveredButton === `service-${index}` ? 'invisible' : 'block'}>
                      En savoir plus
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index * 0.1) + 0.3 }}
                className="absolute -top-3 -right-3 w-8 h-8 bg-terros-mint rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-lg text-gray-600 mb-8">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredButton('main-cta')}
            onHoverEnd={() => setHoveredButton(null)}
            className="bg-gradient-to-r from-terros-blue to-terros-mint text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {hoveredButton === 'main-cta' && (
                <motion.div
                  key="main-cta-hover"
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  Discutons de votre projet
                </motion.div>
              )}
            </AnimatePresence>
            <span className={hoveredButton === 'main-cta' ? 'invisible' : 'block'}>
              Discutons de votre projet
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
