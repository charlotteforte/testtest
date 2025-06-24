import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { slideUp, opacity } from '../animations'

const About = () => {
  const description = useRef<HTMLDivElement>(null)
  const isInView = useInView(description)

  const phrase = "Nous sommes une équipe de développeurs et designers passionnés, dédiés à la création d'expériences digitales exceptionnelles. Avec des années d'expertise en développement sur mesure, nous transformons les idées complexes en solutions élégantes et fonctionnelles."
  const paragraph = "Notre approche combine excellence technique et innovation créative, garantissant que chaque projet livré dépasse les attentes et génère des résultats concrets."

  return (
    <section id="about" className="py-32 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-terros-mint/10 text-terros-blue rounded-full text-sm font-medium mb-4">
            À propos de nous
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Qui sommes-nous
            <span className="text-terros-mint">?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            ref={description}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-xl text-gray-700 leading-relaxed">
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
            
            <div className="text-xl text-gray-700 leading-relaxed">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "100+", label: "Projets Réalisés" },
                { number: "50+", label: "Clients" },
                { number: "100k+", label: "Utilisateurs" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-terros-blue mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main card */}
            <div 
              className="rounded-3xl p-10 text-white relative overflow-hidden"
              style={{
                background: 'radial-gradient(134.26% 206.72% at 50% 224.56%, #7ED7C1 46.6%, #31D3AE 68.83%, #58739C 100%)'
              }}
            >
              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold mb-8">Pourquoi nous choisir ?</h3>
                <div className="space-y-6">
                  {[
                    "Solutions sur mesure adaptées à vos besoins",
                    "Technologies de pointe et meilleures pratiques",
                    "Support dédié tout au long du projet",
                    "Livraison ponctuelle et communication transparente"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-white/95 text-lg leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-terros-mint/10 rounded-full flex items-center justify-center">
                  <span className="text-terros-mint text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Développement Rapide</div>
                  <div className="text-gray-600 text-sm">Livraison en 2-4 semaines</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
