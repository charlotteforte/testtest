import { motion } from 'framer-motion'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-terros-blue">Terros</h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-terros-blue transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-terros-blue transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-terros-blue transition-colors">About</a>
              <a href="#portfolio" className="text-gray-700 hover:text-terros-blue transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-terros-blue transition-colors">Contact</a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-terros-blue"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-terros-blue">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-terros-blue">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-terros-blue">About</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-terros-blue">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-terros-blue">Contact</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
