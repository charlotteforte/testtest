import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'radial-gradient(134.26% 206.72% at 50% 224.56%, #7ED7C1 46.6%, #31D3AE 68.83%, #58739C 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left pl-2"
        >
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
            Custom Digital
            <br />
            <span className="font-bold">Development</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl font-light">
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
