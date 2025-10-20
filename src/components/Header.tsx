'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Search, Github, Twitter, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold gradient-text">博客导航</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              首页
            </a>
            <a href="#categories" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              分类
            </a>
            <a href="#featured" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              精选
            </a>
            <a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">
              关于
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              <a href="#" className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <a href="#home" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300">
              首页
            </a>
            <a href="#categories" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300">
              分类
            </a>
            <a href="#featured" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300">
              精选
            </a>
            <a href="#about" className="block text-gray-300 hover:text-primary-400 transition-colors duration-300">
              关于
            </a>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
              <button className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
              <a href="#" className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}