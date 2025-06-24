import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
      title: 'Analytics Dashboard',
      category: 'Web Development'
    },
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
      title: 'Data Visualization',
      category: 'UI/UX Design'
    },
    {
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&crop=center',
      title: 'Mobile Application',
      category: 'Mobile Development'
    },
    {
      url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center',
      title: 'E-commerce Platform',
      category: 'Full Stack'
    },
    {
      url: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop&crop=center',
      title: 'Content Management',
      category: 'Backend Development'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-terros-mint/10 text-terros-blue rounded-full text-sm font-medium mb-4">
            Nos Réalisations
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Projets qui
            <span className="text-terros-mint"> inspirent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos créations les plus remarquables
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 ${index === currentIndex ? 'z-10' : 'z-0'}`}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.1
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: index === currentIndex ? 1 : 0,
                        y: index === currentIndex ? 0 : 30
                      }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="inline-block px-3 py-1 bg-terros-mint/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
                        {image.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {image.title}
                      </h3>
                      <p className="text-white/90 text-lg max-w-2xl">
                        Une solution innovante développée avec les dernières technologies pour offrir une expérience utilisateur exceptionnelle.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 flex justify-center space-x-4 overflow-x-auto pb-4">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-20 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-2 ring-terros-mint scale-110' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageCarousel
