import React from 'react'
import Herosection from './ui/Herosection'
import Services from './ui/Services'
import Competitive from './ui/Competitive'
import Achievements from './ui/Achievements'
import About from './ui/About'
import Testimonials from './ui/Testimonials'
import Bottomform from './ui/Bottomform'
import Social from './ui/Social'
import Featuressection from './Featuressection'
import Ratings from './ui/Ratings'
import Featurevideo from './ui/Featurevideo'
import { FaqWithImage } from './ui/Faq'

const Homepage = () => {
  const data =[
    {
      header:"Go Global With Globalogy",
      subhead1:"Global Career, Better Salary, Life Abroad, and all things good",
      subhead2:"we help you realize your Dreams. So, are you ready to level up, Buttercup?.",
      headerbutton:"Explore Now",
      dropdown1:"Program 1",
      dropdown2:"Program 2",
      dropdown3:"Program 3",
      dropdown4:"Program 4",
      subheaderbutton:"Want to Move Abroad ?",
      dp:require("../assests/images/banner-with-pic-removebg-preview 1.png"),
      flag1:require('../assests/images/eu-flag.png'),
      flag2:require("../assests/images/Flag_of_the_United_Arab_Emirates.svg.png"),
      flag3:require("../assests/images/flag_of_canada.jpg"),
      flag4:require("../assests/images/australia.png"),
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
      <Ratings/>
      <Featuressection/>
      <Services/>
      <Competitive/>
      {/* <Achievements/> */}
      <Featurevideo/>
      <About/>
      <Testimonials/>
      {/* <Bottomform/> */}
      <FaqWithImage/>
    </div>
  )
}

export default Homepage;
