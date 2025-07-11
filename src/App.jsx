import React from 'react'
import Header from './Components/Header'
import IntroSection from './Components/IntroSection'
// import ProjectCard from './Components/ProjectCard'
import MainContent from './MainContent'

const App = () => {
  return (
  <>
 <div className='bg-black'>
     <Header/>
  <IntroSection/>
  <MainContent/>
 </div>
  </>
  )
}

export default App