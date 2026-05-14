import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Smooth scroll function that accounts for sticky navbar
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const offset = 80 // Height of navbar + some padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  return (
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-black text-white sticky top-0 z-50"
        >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold italic tracking-wide" style={{ fontFamily: 'Georgia, serif', textShadow: '2px 2px 4px rgba(255,255,255,0.3)' }}>
              Iqra.
            </h1>
          </div>
          
          {/* Navigation Links - Desktop (Centered) */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
                className="hover:text-gray-300 transition-colors pb-1 border-b-2 border-white"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="hover:text-gray-300 transition-colors pb-1 border-b-2 border-transparent hover:border-white"
              >
                About
              </a>
              <a 
                href="#services" 
                onClick={(e) => handleSmoothScroll(e, '#services')}
                className="hover:text-gray-300 transition-colors pb-1 border-b-2 border-transparent hover:border-white"
              >
                Services
              </a>
              <a 
                href="#portfolio-heading" 
                onClick={(e) => handleSmoothScroll(e, '#portfolio-heading')}
                className="hover:text-gray-300 transition-colors pb-1 border-b-2 border-transparent hover:border-white"
              >
                Portfolio
              </a>
              <a 
                href="#contact-heading" 
                onClick={(e) => handleSmoothScroll(e, '#contact-heading')}
                className="hover:text-gray-300 transition-colors pb-1 border-b-2 border-transparent hover:border-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Email - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <a 
              href="mailto:iqra07zulfiqar@gmail.com" 
              className="hover:text-gray-300 transition-colors border-b-2 border-white pb-1"
            >
              iqra07zulfiqar@gmail.com
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-700">
            <a 
              href="#home" 
              className="block px-3 py-2 hover:text-gray-300 transition-colors border-b-2 border-white pb-2 inline-block"
              onClick={(e) => handleSmoothScroll(e, '#home')}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 hover:text-gray-300 transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#about')}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block px-3 py-2 hover:text-gray-300 transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#services')}
            >
              Services
            </a>
            <a 
              href="#portfolio-heading" 
              className="block px-3 py-2 hover:text-gray-300 transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#portfolio-heading')}
            >
              Portfolio
            </a>
            <a 
              href="#contact-heading" 
              className="block px-3 py-2 hover:text-gray-300 transition-colors"
              onClick={(e) => handleSmoothScroll(e, '#contact-heading')}
            >
              Contact
            </a>
            <a 
              href="mailto:iqra07zulfiqar@gmail.com" 
              className="block px-3 py-2 border-b-2 border-white pb-2 inline-block"
            >
              iqra07zulfiqar@gmail.com
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar