import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-terros-blue to-terros-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
            Custom Digital
            <br />
            <span className="font-bold">Development</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
            We craft exceptional digital experiences that transform your vision into reality
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-terros-mint text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-terros-mint/90 transition-colors"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
