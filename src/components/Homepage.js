import React from 'react'
import Herosection from './Herosection'
import Featuressection from './Featuressection'
import Services from './ui/Services'
import Competitive from './ui/Competitive'
import Achievements from './ui/Achievements'
import About from './ui/About'
import Testimonials from './ui/Testimonials'
import Bottomform from './ui/Bottomform'
import Social from './ui/Social'
import Footer from './ui/Footer'

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <Featuressection />
      <Services/>
      <Competitive/>
      <Achievements/>
      <About/>
      <Testimonials/>
      <Bottomform/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default Homepage
