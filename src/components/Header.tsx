import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/10 backdrop-blur-lg border-b border-white/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-bold text-white">
              Terros
              <span className="text-terros-mint">.</span>
            </h1>
          </motion.div>
          
          <nav className="hidden lg:block">
            <div className="flex items-center space-x-12">
              {[
                { href: "#methode", label: "Méthode" },
                { href: "#cas-client", label: "Cas client" },
                { href: "#agence", label: "Agence" },
                { href: "#integrations", label: "Intégrations" },
                { href: "#leo", label: "Leo IA" }
              ].map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terros-mint transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-300 border border-white/30"
          >
            Contact
          </motion.button>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-terros-mint transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black/40 backdrop-blur-xl border-t border-white/20"
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            {[
              { href: "#methode", label: "Méthode" },
              { href: "#cas-client", label: "Cas client" },
              { href: "#agence", label: "Agence" },
              { href: "#integrations", label: "Intégrations" },
              { href: "#leo", label: "Leo, Premier Développeur IA" }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block px-4 py-3 text-white hover:text-terros-mint hover:bg-white/10 rounded-xl transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header
