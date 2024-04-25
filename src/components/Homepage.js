import React from 'react'
import Herosection from './ui/Herosection'
import Services from './ui/Services'
import Competitive from './ui/Competitive'
import Achievements from './ui/Achievements'
import About from './ui/About'
import Testimonials from './ui/Testimonials'
import Bottomform from './ui/Bottomform'
import Social from './ui/Social'
import Footer from './ui/Footer'
import Featuressection from './Featuressection'

const Homepage = () => {
  const data =[
    {
      header:"Go Global With Globalogy",
      subhead1:"Global Career, Better Salary, Life Abroad, and all things good",
      subhead2:"we help you realize your Dreams. So, are you ready to level up, Buttercup?.",
      headerbutton:"View Courses",
      subheaderbutton:"where can I move ?",
      dp:require("../assests/images/banner-with-pic-removebg-preview 1.png"),
      flag1:require('../assests/images/Flag_of_Argentina-512x320 1.png'),
      flag2:require("../assests/images/Flag_of_Australia-512x256 1.png"),
      flag3:require("../assests/images/Flag_of_Canada-512x256 1.png"),
      flag4:require("../assests/images/Flag_of_England-512x307 1.png"),
      users:require("../assests/images/user 1.png"),
      insta:require("../assests/images/3d_circle_with_instagram_symbol_isolated_on_a_transparent_background-removebg-preview 1.png"),
      twitter:require("../assests/images/glossy-round-black-white-twitter-logo-isolated-transparent-background_125540-3693-removebg-preview 1.png"),
      yt:require("../assests/images/ytb.png"),
      linkedin:require("../assests/images/lknd.png"),
      studentnum:"35000+ Happy Students",
      box1header:"264K+",
      box1subhead:"Subscribers on Youtube",
      box2header:"6K+",
      box2subhead:"Followers On Twitter",
      box3header:"1.2M+",
      box3subhead:"Followers on Instagram",
      box4header:"264K+",
      box4subhead:"Followers on LinkedIn"
    },
  ]
  return (
    <div>
      <Herosection data={data}/>
      <Featuressection/>
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

export default Homepage;
