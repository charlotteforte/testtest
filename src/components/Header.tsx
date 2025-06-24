import { motion } from 'framer-motion'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">Terros</h1>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#methode" className="text-white hover:text-terros-mint transition-colors">Méthode</a>
              <a href="#cas-client" className="text-white hover:text-terros-mint transition-colors">Cas client</a>
              <a href="#agence" className="text-white hover:text-terros-mint transition-colors">Agence</a>
              <a href="#integrations" className="text-white hover:text-terros-mint transition-colors">Intégrations</a>
              <a href="#leo" className="text-white hover:text-terros-mint transition-colors">Leo, Premier Développeur IA</a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-terros-mint"
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
          className="md:hidden bg-black/20 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#methode" className="block px-3 py-2 text-white hover:text-terros-mint">Méthode</a>
            <a href="#cas-client" className="block px-3 py-2 text-white hover:text-terros-mint">Cas client</a>
            <a href="#agence" className="block px-3 py-2 text-white hover:text-terros-mint">Agence</a>
            <a href="#integrations" className="block px-3 py-2 text-white hover:text-terros-mint">Intégrations</a>
            <a href="#leo" className="block px-3 py-2 text-white hover:text-terros-mint">Leo, Premier Développeur IA</a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
