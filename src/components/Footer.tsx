import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-terros-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Terros</h3>
            <p className="text-white/80">
              Custom digital development solutions that transform your vision into reality.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-terros-mint transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-terros-mint transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-terros-mint transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-terros-mint transition-colors">E-commerce</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-terros-mint transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-terros-mint transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-terros-mint transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-terros-mint transition-colors">Careers</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-terros-mint transition-colors">
                <span className="text-sm">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-terros-mint transition-colors">
                <span className="text-sm">💼</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-terros-mint transition-colors">
                <span className="text-sm">🐦</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Terros. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
