import React from 'react'
import Course from '../Course'
import Footer from '../ui/Footer'

const Chancenkarte = () => {
  const data =[{
    header1:"CHANCENKARTE VISA",
    header2:"GUIDE!",
    header3:"with Nidhi Nagori",
    header4:"The Chancenkarte aka Opportunity Card Visa is a game-changer for skilled non-EU workers seeking employment in Germany. This new visa allows you to live and work part-time in Germany for up to one year while you search for a full-time job or vocational training.",
    time:"",
    hours:"2 hours",
    date:"",
    Enroll_link:"",
    button1:"REGISTER NOW!",
    header5:"What’s In It For You?",
    header6:"Bonuses worth 5K",
    subheader1:"Get exclusive complimentary bonuses during the session.",
    header7:"3 Month Access",
    subheader2:"The recording of the Live session can be accessed for 3 months from the date of sign-up.",
    header8:"Live Q&A",
    subheader3:"Participants can directly ask questions to the mentors.",
    header9:"Are you a non-EU resident interested in Germany?",
    header10:"This Masterclass is for YOU if you are curious about the Chancenkarte Visa and its potential.",
    header11:"Students or a Working Professionals",
    subheader4:"If you're considering relocating to Germany but uncertain about the country's conditions, this masterclass is for you.",
    header12:"Destination Dilemma?",
    subheader5:"Unsure which country is the perfect fit for you? Join us to gain clarity on whether Germany aligns with your aspirations.",
    header13:"Future Residents",
    subheader6:"Planning to relocate to Germany, either now or in the future? Understand the immigration process and set yourself up for a successful transition with our expert advice.",
    header14:"Visa Seekers",
    subheader7:"Seeking visa sponsorship for your relocation? Gain insights into the job market and secure visa-sponsored opportunities with our guidance.",
    button2:" LIMITED SEATS! ENROL NOW!",
    header15:"Watch This Video Before You Move",
    ytlink:"https://youtu.be/8TIeWI8V1nI",
    header16:"What will you learn in 2 Hours?",
    header17:"Unlock Your German Future",
    subheader8:"Dive deep into the eligibility criteria and application process for the Chancenkarte visa. Learn what it takes to qualify and how to navigate a successful application.",
    header18:"Prepare with Confidence",
    subheader9:"Gain clarity on all the required documents and associated fees for the Chancenkarte visa. Ensure you have everything in order for a smooth application process.",
    header19:"Fast Track Your Move",
    subheader10:"Understand the expected timelines for securing your Chancenkarte visa and explore the potential benefits it offers, including residency pathways and work opportunities.",
    header20:"Maximise Your Score",
    subheader11:"Decode the Chancenkarte's point-based system. Learn how to earn points and maximise your chances of securing this visa, opening doors to a life in Germany.",
    card1img:require("../../assests/images/card1.webp"),
    card2img:require("../../assests/images/card1.webp"),
    card3img:require("../../assests/images/card1.webp"),
    card4img:require("../../assests/images/card1.webp"),
    header21:"Hi, This is Nidhi Nagori",
    header22:"Exclusive Bonus",
    subheader12:"Free Bonuses worth INR 5K will be revealed during the Masterclass to jumpstart your Germany move!",
    subheader13:"",
    header23:"FAQs",
    question1:"How many mentors will be there in the session?",
    answer1:"There will be one experienced host from the Globalogy team to guide you through the Chancenkarte Visa potential.",
    question2:"Is this a live session, or will it be pre-recorded?",
    answer2:"The Masterclass will be a live interactive session held over Zoom. The recording will be available for 90 days from your registration date.",
    question3:"What if I want a refund?",
    answer3:"This is a free session.",
    question4:"How will I access the bonuses?",
    answer4:"The exclusive bonuses will be unveiled during the Masterclass. Once the session is over, you'll be able to access them easily within the Resources section on your course page.",
    question5:"Will I get a chance to ask my questions?",
    answer5:"Absolutely! There will be a dedicated Q&A session during the live masterclass where you can submit your questions through the chat box. The mentors will address each question to ensure you gain maximum value.",
    price:"Free",
    msrp:""
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

export default Chancenkarte
