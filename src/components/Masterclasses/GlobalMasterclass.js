import React from 'react'
import Course from '../Course'
import Footer from '../ui/Footer'

const GlobalMasterclass = () => {
  const data =[{
    header1:"UNLOCK THE WORLD:",
    header2:"GO GLOBAL 🌍",
    header3:"with Nidhi Nagori",
    header4:"The world is your oyster! Over the past few years, record labour shortages in high-income countries have created a great demand for international workers, professionals, and students. Unlock your global potential!",
    time:"",
    hours:"",
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
    header9:"The World Awaits!",
    header10:"This Masterclass is for YOU if you are curious about global opportunities.",
    header11:"Students or a Working Professionals",
    subheader4:"If you're considering exploring the endless possibilities of international careers, education, and life-changing adventures.",
    header12:"Destination Dilemma?",
    subheader5:"Unsure which country is the perfect fit for you? Join us to gain clarity on which country aligns with your aspirations.",
    header13:"Future Residents",
    subheader6:"Decode the immigration process for various countries, gaining valuable insights into visas, work permits, and residency options.",
    header14:"Land your Dream Job",
    subheader7:"Gain strategies for navigating the global job market, crafting compelling applications, and securing visa-sponsored opportunities.",
    button2:" LIMITED SEATS! ENROL NOW!",
    header15:"Watch This Video Before You Move",
    ytlink:"https://youtu.be/hSGoSV16-y8",
    header16:"What will you learn in 2 Hours?",
    header17:"Self-Discovery for Global Success",
    subheader8:"Gain a deep understanding of your strengths, skills, and aspirations as an international immigrant.",
    header18:"Your Perfect Place on the Map",
    subheader9:"Explore a framework for choosing the ideal country and city that aligns with your lifestyle preferences, career goals, and immigration options.",
    header19:"Navigate the System Like a Pro",
    subheader10:"Demystify the complexities of immigration processes for various countries. Learn how to approach visa applications, work permits, and residency options with confidence and clarity.",
    header20:"Unlock Your Global Network",
    subheader11:"Connect with a supportive community of fellow Masterclass participants. Share experiences, ask questions, and build connections with others who share your dream of living abroad.",
    card1img:require("../../assests/images/card1.webp"),
    card2img:require("../../assests/images/card1.webp"),
    card3img:require("../../assests/images/card1.webp"),
    card4img:require("../../assests/images/card1.webp"),
    header21:"Hi, This is Nidhi Nagori",
    header22:"Exclusive Bonus",
    subheader12:"Free Bonuses worth INR 5K will be revealed during the Masterclass to jumpstart your GLobal move!",
    subheader13:"",
    header23:"FAQs",
    question1:"How many mentors will be there in the session?",
    answer1:"TNidhi Nagori will be hosting the session. She is a CA, CPA, CISA, Content creator & a Career coach.",
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

export default GlobalMasterclass
