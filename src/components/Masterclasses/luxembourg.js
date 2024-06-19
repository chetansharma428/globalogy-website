import React from 'react'
import Course from '../Course'
import Footer from '../ui/Footer'

const Luxembourg = () => {
  const data =[{
    header1:"BONJOUR! RICHEST COUNTRY",
    header2:"IS HIRING! 💰",
    header3:"with Nidhi Nagori",
    header4:"They are facing labour challenges. France & Luxembourg need 200,000 workers by 2030! Register to learn about immigration, visa sponsorship, job market scenario, job hunting strategies, insider tips and much more from the experts.",
    time:"",
    hours:"2 hours",
    date:"",
    Enroll_link:"",
    button1:"REGISTER NOW!",
    header5:"What’s In It For You?",
    header6:"Bonuses worth 20K",
    subheader1:"Get exclusive complimentary bonuses during the session.",
    header7:"3 Month Access",
    subheader2:"The recording of the Live session can be accessed for 3 months from the date of sign-up.",
    header8:"Live Q&A",
    subheader3:"Participants can directly ask questions to the mentors.",
    header9:"Craving a High-Paying Career & English Speaking Jobs?",
    header10:"This Masterclass is for YOU if booming economy & high salaries sounds perfect for your dream job abroad!",
    header11:"Career Climbers Seeking High Salaries",
    subheader4:"If you dream of high-paying job opportunities with English as the primary language, this masterclass is for you.",
    header12:"The Family-Focused Dreamer",
    subheader5:"Are you considering a move abroad with your spouse & children? Luxembourg's welcoming atmosphere and family-friendly policies can ease your transition.",
    header13:"The Indecisive Explorer",
    subheader6:"Torn between different locations for your international move? Join us to gain clarity on whether France & Luxembourg aligns with your aspirations.",
    header14:"Future Residents",
    subheader7:"Planning to relocate to Europe, either now or in the future? Understand the immigration process and set yourself up for a successful transition with our expert advice.",
    button2:" LIMITED SEATS! ENROL NOW!",
    header15:"Watch This Video Before You Move",
    ytlink:"https://www.youtube.com/watch?v=nd6TCRBakp4",
    header16:"What will you learn in 2 Hours?",
    header17:"Your Course to Residency",
    subheader8:"We'll explore over 10+ pathways to move, helping you choose the best fit for your goals, skills, and desired destination.",
    header18:"Land Your Dream Job",
    subheader9:"Craft a resume that grabs the attention of top recruiters around the world & master interview techniques to land the visa sponsored job offer.",
    header19:"Demystify the Job Market",
    subheader10:"Gain insider tips on how to find hidden opportunities and secure a visa sponsorship that paves the way for your move.",
    header20:"Beyond the Honeymoon Phase",
    subheader11:"Prepare for the realities of living in a new country. Understand the upsides and downsides of moving abroad, helping you manage expectations and thrive in the new environment.",
    card1img:require("../../assests/images/card1.webp"),
    card2img:require("../../assests/images/card1.webp"),
    card3img:require("../../assests/images/card1.webp"),
    card4img:require("../../assests/images/card1.webp"),
    header21:"Hi, This is Nidhi Nagori",
    header22:"Exclusive Bonus",
    subheader12:"Free Bonuses worth INR 20K will be revealed during the Masterclass to jumpstart your move to the World’s Richest Country!",
    subheader13:"(Get course resources, resume template, list of 50+ recruiting agencies with 50K+ jobs & much more!)",
    header23:"FAQs",
    question1:"How many mentors will be there in the session?",
    answer1:"There will be 4 experienced mentors from diverse industries to share insider tips.",
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

export default Luxembourg
