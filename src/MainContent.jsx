import React from 'react';
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiFirebase, SiGmail
} from 'react-icons/si';


function MainContent({ activeSection }) {
  return (
    <>
      {/* Skills Section */}
      <motion.div 
        className='Skills w-full max-w-[1400px] min-h-[500px] text-white p-6 sm:p-8 md:p-10 mt-10 flex justify-center items-center mx-auto relative overflow-hidden'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900/40 to-blue-900/20 rounded-2xl"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(17, 24, 39, 0.4), rgba(29, 78, 216, 0.2))',
              'linear-gradient(135deg, rgba(29, 78, 216, 0.2), rgba(88, 28, 135, 0.4), rgba(17, 24, 39, 0.2))',
              'linear-gradient(135deg, rgba(17, 24, 39, 0.2), rgba(29, 78, 216, 0.4), rgba(88, 28, 135, 0.2))',
              'linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(17, 24, 39, 0.4), rgba(29, 78, 216, 0.2))'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative w-full backdrop-blur-sm bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-6 p-6 sm:p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-600/30">
            <SkillIcon icon={<FaReact />} name="React" color="text-cyan-400" />
            
            <SkillIcon icon={<FaHtml5 />} name="HTML5" color="text-orange-500" />
            <SkillIcon icon={<FaCss3Alt />} name="CSS3" color="text-blue-400" />
            <SkillIcon icon={<FaJs />} name="JavaScript" color="text-yellow-400" />
            <SkillIcon icon={<SiTailwindcss />} name="Tailwind" color="text-teal-400" />
            <SkillIcon icon={<SiFirebase />} name="Firebase" color="text-yellow-500" />
            <SkillIcon icon={<FaGitAlt />} name="Git" color="text-red-400" />
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div 
        id='about' 
        className="About-section w-full max-w-[1400px] text-white p-6 sm:p-8 md:p-10 mx-auto flex items-center min-h-[600px] sm:min-h-[650px] mb-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-900/40 to-purple-900/20 rounded-2xl"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(194, 65, 12, 0.2), rgba(17, 24, 39, 0.4), rgba(88, 28, 135, 0.2))',
              'linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(194, 65, 12, 0.4), rgba(17, 24, 39, 0.2))',
              'linear-gradient(135deg, rgba(17, 24, 39, 0.2), rgba(88, 28, 135, 0.4), rgba(194, 65, 12, 0.2))',
              'linear-gradient(135deg, rgba(194, 65, 12, 0.2), rgba(17, 24, 39, 0.4), rgba(88, 28, 135, 0.2))'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative w-full backdrop-blur-sm bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          
          <div className="text-center text-base sm:text-lg md:text-xl w-full max-w-[900px] mx-auto">
            <motion.p 
              className='text-justify text-gray-300 leading-relaxed mb-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Hi, I'm Tanmayshukla — a passionate developer who thrives on creating visually striking and highly functional web experiences. With a deep love for both front-end aesthetics and back-end architecture, I enjoy crafting seamless digital solutions that not only look great but perform exceptionally well.
            </motion.p>
            
            <motion.div 
              className='text-left bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='text-orange-400 text-xl font-semibold mb-4 flex items-center gap-2'>
                <span className="text-2xl">🎯</span>
                In My Free Time
              </h3>
              <ul className='text-gray-300 space-y-3'>
                <motion.li 
                  className='flex items-center gap-3 hover:text-white transition-colors duration-300'
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl">♟️</span>
                  <span>Playing cricket</span>
                </motion.li>
                <motion.li 
                  className='flex items-center gap-3 hover:text-white transition-colors duration-300'
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl">🎌</span>
                  <span>Watching movie</span>
                </motion.li>
            
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        id='portfolio'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="Portfolio-section w-full max-w-[1400px] mt-10 text-white p-6 sm:p-8 md:p-10 overflow-hidden mx-auto relative"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900/40 to-purple-900/20 rounded-2xl"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(29, 78, 216, 0.2), rgba(17, 24, 39, 0.4), rgba(88, 28, 135, 0.2))',
              'linear-gradient(135deg, rgba(88, 28, 135, 0.2), rgba(29, 78, 216, 0.4), rgba(17, 24, 39, 0.2))',
              'linear-gradient(135deg, rgba(17, 24, 39, 0.2), rgba(88, 28, 135, 0.4), rgba(29, 78, 216, 0.2))',
              'linear-gradient(135deg, rgba(29, 78, 216, 0.2), rgba(17, 24, 39, 0.4), rgba(88, 28, 135, 0.2))'
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative backdrop-blur-sm bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>

          <div className="flex flex-wrap gap-6 justify-center">
            <ProjectCard title="Ecommerce" description="A modern, responsive Ecommerce website showcasing my skills and projects with smooth animations and interactive elements."  technologies={['React', 'Tailwind CSS']} />
            <ProjectCard title="Avatar Game" description="An interactive avatar-based game with engaging gameplay mechanics and responsive design."    projectLink="#" technologies={['HTML5', 'CSS3','JAVASCRIPT']} />
            <ProjectCard title="Poke-World" description="A Pokemon-themed web application with API integration and dynamic content rendering." projectLink="#" technologies={['HTML5', 'CSS3','JAVASCRIPT']} />
            <ProjectCard title="TMDB-Movies" description="A responsive TMDB-movies with multiple components and clean UI"  technologies={['React.js','Tailwindcss']} />
            <ProjectCard title="Quiz Game" description="An interactive quiz application with multiple choice questions and score tracking."  technologies={['HTML5', 'JavaScript']} />
            <ProjectCard title="Flip Card Game" description="A memory-based card flipping game with smooth animations and scoring system."  technologies={['HTML5', 'JavaScript']} />
          </div>
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div 
        className='w-full max-w-[1400px] min-h-[300px] my-20 mx-auto p-6 sm:p-8 relative overflow-hidden'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-900/40 to-blue-900/20 rounded-2xl"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(17, 24, 39, 0.4), rgba(29, 78, 216, 0.2))',
              'linear-gradient(135deg, rgba(29, 78, 216, 0.2), rgba(34, 197, 94, 0.4), rgba(17, 24, 39, 0.2))',
              'linear-gradient(135deg, rgba(17, 24, 39, 0.2), rgba(29, 78, 216, 0.4), rgba(34, 197, 94, 0.2))',
              'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(17, 24, 39, 0.4), rgba(29, 78, 216, 0.2))'
            ]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative backdrop-blur-sm bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h3>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-pink-500"></div>
            <div className="space-y-6 ml-8">
              <motion.div
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-10 top-6 w-3 h-3 bg-orange-500 rounded-full border-2 border-gray-900"></div>
                <p className="text-gray-300 text-sm sm:text-base">
                  <span className="text-orange-400 font-semibold">Full Stack Intern</span> @ FSL Learning
                </p>
                <p className="text-gray-400 text-sm mt-1">September 2024 - Present</p>
              </motion.div>
              
              <motion.div
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-600/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-10 top-6 w-3 h-3 bg-pink-500 rounded-full border-2 border-gray-900"></div>
                <p className="text-gray-300 text-sm sm:text-base">
                  <span className="text-pink-400 font-semibold">Personal Projects</span>
                </p>
                <p className="text-gray-400 text-sm mt-1">Built multiple web applications</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        id='contact' 
        className='w-full max-w-[1400px] text-center mt-10 p-6 sm:p-8 md:p-10 mx-auto relative overflow-hidden'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-gray-900/40 to-orange-900/20 rounded-2xl"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(17, 24, 39, 0.4), rgba(194, 65, 12, 0.2))',
              'linear-gradient(135deg, rgba(194, 65, 12, 0.2), rgba(236, 72, 153, 0.4), rgba(17, 24, 39, 0.2))',
              'linear-gradient(135deg, rgba(17, 24, 39, 0.2), rgba(194, 65, 12, 0.4), rgba(236, 72, 153, 0.2))',
              'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(17, 24, 39, 0.4), rgba(194, 65, 12, 0.2))'
            ]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative backdrop-blur-sm bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect With Me
          </motion.h3>
          
          <div className="space-y-6 max-w-md mx-auto">
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center gap-3 text-gray-300 hover:text-white transition border border-gray-600/30 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <SiGmail className="w-6 h-6 text-red-400 group-hover:text-red-300 transition" />
              <span className="text-sm sm:text-base">tanmayshukla252@gmail.com</span>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center gap-3 text-gray-300 hover:text-white transition border border-gray-600/30 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-green-400 text-xl group-hover:text-green-300 transition">📞</span>
              <span className="text-sm sm:text-base">8000540298</span>
            </motion.div>
            
            <motion.div 
              className="flex gap-6 mt-8 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/tanmay-shukla-620724329/" 
                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-full hover:bg-blue-600/20 transition border border-gray-600/30 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition" />
              </motion.a>
              <motion.a 
                href="https://github.com/Tanmayshukla25" 
                className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-full hover:bg-gray-600/20 transition border border-gray-600/30 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-white transition" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function SkillIcon({ icon, name, color }) {
  return (
    <motion.div
      className="flex flex-col items-center group cursor-pointer"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-full w-16 h-16 flex items-center justify-center mb-3 group-hover:bg-gray-700/50 transition border border-gray-600/30 shadow-lg"
      >
        <span className={`text-2xl ${color} group-hover:scale-110 transition-transform`}>
          {icon}
        </span>
      </motion.div>
      <span className="text-xs sm:text-sm text-center text-gray-300 group-hover:text-white transition">{name}</span>
    </motion.div>
  );
}

function ProjectCard({ title, description, technologies, gifSrc, projectLink }) {
  return (
    <motion.a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="border w-[320px] border-gray-600/30 rounded-xl overflow-hidden hover:border-orange-400/50 transition-all duration-300 group block bg-gray-800/30 backdrop-blur-sm shadow-lg hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="bg-gray-800/50 h-52 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <h3 className="absolute inset-0 flex items-center justify-center font-bold text-lg text-gray-300 group-hover:text-white transition z-10">
          Preview
        </h3>
        <img
          src={gifSrc}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-3 text-white group-hover:text-orange-400 transition">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-700/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-300 group-hover:bg-gray-600/50 transition border border-gray-600/30">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default MainContent;