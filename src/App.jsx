import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Myprojects from './components/myprojects/Myprojects'
import Footer from './components/footer/Footer'
import Work from './components/work/Work'

const App = () => {
  return (
    
    <>
        <Header/>
        <About/>
        <Skills/>
        <Work/>
        <Myprojects/>
        <Footer/>

    </>
  )
}

export default App