import React from 'react'
import Herosection from './ui/Herosection'
import Services from './ui/Services'
import Competitive from './ui/Competitive'
import About from './ui/About'
import Testimonials from './ui/Testimonials'
import Featuredsection from './Featuredsection'
import Ratings from './ui/Ratings'
import Featurevideo from './ui/Featurevideo'
import { FaqWithImage } from './ui/Faq'
import Navbar from './ui/Navbar'

const Homepage = () => {
  const data =[
    {
      header:"Go Global With Globalogy",
      subhead1:"Do you dream of a Global Career, Better Salary & Life Abroad? We help you move abroad and turn your dream of living & working internationally into reality.",
      subhead2: "",
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
    },
  ]
  return (
    <div>
      <Navbar />
      <Herosection data={data}/>
      <Ratings/>
      <Featuredsection/>
      <Services/>
      <Competitive/>
      <Featurevideo/>
      <About/>
      <Testimonials/>
      <FaqWithImage/>
    </div>
  )
}

export default Homepage;
