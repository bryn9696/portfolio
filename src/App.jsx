import React from 'react'
import Header from './components/header/header.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Experience from './components/experience/experience.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Contact from './components/contact/contact.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
    {/* <div id="experience-portfolio-section"> */}
      <Experience />
      <Portfolio />
    {/* </div> */}
      {/* <Contact /> */}

      <Contact />
    </div>
  )
}

export default App