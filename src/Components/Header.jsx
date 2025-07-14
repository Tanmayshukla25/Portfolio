import React from 'react';
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ activeSection, setActiveSection, menuOpen, setMenuOpen }) => {
  return (
    <header className='fixed top-0 z-[99] w-full'>
      {/* Dark background with blur effect */}
      <div className='absolute inset-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50'></div>
      
      {/* Animated gradient overlay */}
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20'
        animate={{
          background: [
            'linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(251, 146, 60, 0.2))',
            'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
            'linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
            'linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(251, 146, 60, 0.2))'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      <div className='relative py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-0 px-4 sm:px-12 md:px-24 lg:px-36 h-auto sm:h-[70px]'>
        {/* Logo Section with Enhanced Animation */}
        <motion.div
          className="flex items-center gap-3 text-xl sm:text-2xl text-white w-full sm:w-auto"
          initial={{ opacity: 0, y: -30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated Wave Emoji with Glow */}
          <motion.div className="relative">
            <motion.span
              className="text-yellow-400 text-2xl sm:text-3xl drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
              animate={{ 
                rotate: [0, 15, -15, 15, -15, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              👋
            </motion.span>
            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 border-2 border-yellow-400/30 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          {/* Enhanced Logo Text */}
          <motion.h1
            className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-bold tracking-wide drop-shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(251, 146, 60, 0.5)"
            }}
          >
            Hey!
          </motion.h1>
          
          {/* Mobile Menu Toggle */}
          <div className="sm:hidden w-full flex justify-end">
            <motion.button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-white text-2xl p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
        
        {/* Enhanced Navigation Menu */}
        <motion.div 
          className={`backdrop-blur-xl bg-gray-800/80 border border-gray-600/30 rounded-2xl px-6 py-4 sm:px-8 sm:py-3 md:px-12 lg:px-20 w-[280px] sm:w-auto transition-all duration-500 ease-out shadow-2xl ${menuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'} sm:block sm:opacity-100 sm:translate-y-0 absolute right-4 sm:relative sm:right-auto`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: menuOpen || window.innerWidth >= 640 ? 1 : 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <ul className='relative flex flex-col sm:flex-row gap-6 sm:gap-8 text-sm sm:text-base text-center'>
            {['about', 'project', 'contact'].map((section, index) => (
              <motion.li 
                key={section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <motion.a
                  href={`#${section}`}
                  onClick={() => {
                    setActiveSection(section);
                    setMenuOpen(false);
                  }}
                  className={`relative cursor-pointer font-medium tracking-wide transition-all duration-300 group ${
                    activeSection === section 
                      ? 'text-transparent bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.toUpperCase()}
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: activeSection === section ? '100%' : '0%' 
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ transform: 'scale(1.2)' }}
                  />
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;