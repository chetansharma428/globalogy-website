import React from 'react'
import Herosection from './Herosection'
import Featuressection from './Featuressection'
import Services from './ui/Services'
import Competitive from './ui/Competitive'
import Achievements from './ui/Achievements'
import About from './ui/About'

const Homepage = () => {
  return (
    <div>
      <Herosection />
      <Featuressection />
      <Services/>
      <Competitive/>
      <Achievements/>
      <About/>
    </div>
  )
}

export default Homepage
