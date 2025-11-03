import React from 'react'
import Header from './Components/Header'
import IntroSection from './Components/IntroSection'
// import ProjectCard from './Components/ProjectCard'
import MainContent from './MainContent'
import ContactForm from './Components/WhatsApp'

const App = () => {
  return (
  <>
 <div className='bg-black'>
     <Header/>
  <IntroSection/>
  <MainContent/>
  <ContactForm/>
 </div>
  </>
  )
}

export default App