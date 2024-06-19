import React from 'react'
import Course from '../Course'
import Footer from '../ui/Footer'

const Linkedin_one = () => {
  const data =[{
    header1:"FIND JOBS THE",
    header2:"RIGHT WAY ✅",
    header3:"with Nidhi Nagori",
    header4:"In this exclusive 2-hour Masterclass, you'll unlock the secrets to building a powerful LinkedIn profile and crafting a personal brand that gets you noticed by the right people. Explore the hidden gems of LinkedIn. Go beyond the resume!",
    time:"",
    hours:"",
    data:"",
    Enroll_link:"",
    button1:"REGISTER NOW!",
    header5:"What’s In It For You?",
    header6:"Bonuses worth 15K",
    subheader1:"Get exclusive complimentary bonuses during the session.",
    header7:"3 Month Access",
    subheader2:"The recording of the Live session can be accessed for 3 months from the date of sign-up.",
    header8:"Live Q&A",
    subheader3:"Participants can directly ask questions to the mentors.",
    header9:"Get job ready in just 2 Hours!",
    header10:"This Masterclass is for YOU if you're serious about attracting the right opportunities.",
    header11:"Looking for Dream Job",
    subheader4:"Stand out from the crowd with a powerful profile and network that gets recruiters buzzing.",
    header12:"Become LinkedIn Expert",
    subheader5:"Build a strong personal brand and share your knowledge to establish yourself as a leader.",
    header13:"Grow Your Network",
    subheader6:"Learn how to connect with the right people and build a network that fuels your career growth.",
    header14:"Go Global",
    subheader7:"Craft a profile and brand to attract international opportunities and showcase your skills worldwide",
    button2:" LIMITED SEATS! ENROL NOW!",
    header15:"Watch This Video Before You Move",
    ytlink:"https://youtu.be/sqRYHsfEIzY",
    header16:"What will you learn in 2 Hours?",
    header17:"Techniques to find a Job",
    subheader8:"Do you know finding a job requires SEO research, using the right keyword & filter search?",
    header18:"Presentation",
    subheader9:"Do you know what matters the most in your profile? Learn how to represent your skills the right way.",
    header19:"Profile Visibility",
    subheader10:"Do you know 94% of recruiters use LinkedIn to find candidates? The profile that appears on top gets noticed by them.",
    header20:"Mentor Session",
    subheader11:"The experts always know it better. Learn how they used LinkedIn to get high-paying jobs and move abroad.",
    card1img:require("../../assests/images/card1.webp"),
    card2img:require("../../assests/images/card1.webp"),
    card3img:require("../../assests/images/card1.webp"),
    card4img:require("../../assests/images/card1.webp"),
    header21:"Hi, This is Nidhi Nagori",
    header22:"Exclusive Bonus",
    subheader12:"Free Bonuses worth INR 20K will be revealed during the Masterclass to jumpstart your LinkedIn move!",
    subheader13:"(Get course resources, LinkedIn templates, practices, case studies & much more!)",
    header23:"FAQs",
    question1:"Will I be able to find jobs & apply?",
    answer1:"Yes! We’ll teach you techniques that will help you find jobs of your dream.",
    question2:"Is this a live session, or will it be pre-recorded?",
    answer2:"The Masterclass will be a live interactive session held over Zoom. The recording will be available for 90 days from your registration date.",
    question3:"What if I want a refund?",
    answer3:"Unfortunately, do not offer refunds for the Masterclass.",
    question4:"How will I access the bonuses?",
    answer4:"The exclusive bonuses will be unveiled during the Masterclass. Once the session is over, you'll be able to access them easily within the Resources section on your course page.",
    question5:"Will I get a chance to ask my questions?",
    answer5:"Absolutely! There will be a dedicated Q&A session during the live masterclass where you can submit your questions through the chat box. The mentors will address each question to ensure you gain maximum value.",
    price:"Free",
    msrp:"",
  }]
  const FooterData = [{
    header1:"Ready to make your move?",
    header2:"Don't let the dream of an international career remain just a dream. Take the first step towards a fulfilling and exciting professional journey on the global stage.",
    button1:"Get Started Now!",
  }]
  return (
    <div>
      <Course data= {data}/>
      <Footer FooterData={FooterData}/>
    </div>
  )
}

export default Linkedin_one
