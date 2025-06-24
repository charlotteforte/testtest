import { motion } from 'framer-motion'
import { perspective } from '../animations'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'radial-gradient(134.26% 206.72% at 50% 224.56%, #7ED7C1 46.6%, #31D3AE 68.83%, #58739C 100%)'
      }}
    >
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left pl-5"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              ✨ Développement sur mesure
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block"
            >
              Custom Digital
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            >
              Development
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Nous créons des expériences digitales exceptionnelles qui transforment votre vision en réalité
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-terros-blue px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <motion.span
                variants={perspective}
                initial="initial"
                whileHover="enter"
                exit="exit"
                className="block"
              >
                Démarrer votre projet
              </motion.span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              <motion.span
                variants={perspective}
                initial="initial"
                whileHover="enter"
                exit="exit"
                className="block"
              >
                Voir nos réalisations
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
