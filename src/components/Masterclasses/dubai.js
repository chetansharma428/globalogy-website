import React from 'react'
import Course from '../Course'

const Dubai = () => {
  const data =[{
    header1:"HABIBI, COME TO",
    header2:"DUBAI! 🏝️",
    header3:"with Nidhi Nagori",
    header4:"In a comprehensive Masterclass on Dubai, unlock the secrets of building a global career in the City of Gold. Learn about immigration, visa sponsorship, job market scenario, job hunting strategies, insider tips and much more from the experts. ",
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
    header9:"Is your dream of living abroad on hold?",
    header10:"This Masterclass is for YOU if you are ready to unlock the secrets to making it into a reality.",
    header11:"Students or a Working Professionals",
    subheader4:"If you're considering relocating to Dubai but uncertain about the country's conditions, this masterclass is for you.",
    header12:"Destination Dilemma?",
    subheader5:"Unsure which country is the perfect fit for you? Join us to gain clarity on whether Dubai aligns with your aspirations.",
    header13:"Future Residents",
    subheader6:"Planning to relocate to Dubai, either now or in the future? Understand the immigration process and set yourself up for a successful transition with our expert advice.",
    header14:"Visa Seekers",
    subheader7:"Seeking visa sponsorship for your relocation? Gain insights into the job market and secure visa-sponsored opportunities with our guidance.",
    button2:" LIMITED SEATS! ENROL NOW!",
    header15:"Watch This Video Before You Move",
    ytlink:"https://www.youtube.com/watch?v=YEfLNcuXfRE",
    header16:"What will you learn in 2 Hours?",
    header17:"Immigration Insights",
    subheader8:"Gain valuable insights into the immigration process, discover the pathways available for securing residency, understand visa types, sponsorship options, application process, etc.",
    header18:"Job Hunting Strategies",
    subheader9:"Learn how to craft a compelling global resume, how to ace your interviews, and insights around the job market.",
    header19:"Living Like a Local",
    subheader10:"Get insider tips on finding accommodation, navigating transportation, cultural expectations and embracing the local lifestyle.",
    header20:"Beyond the Basics",
    subheader11:"Get deeper information from 5 Mentors from various industries (HR, IT, Product Management, Marketing & Operations) & get your queries answered.",
    card1img:require("../../assests/images/card1.webp"),
    card2img:require("../../assests/images/card1.webp"),
    card3img:require("../../assests/images/card1.webp"),
    card4img:require("../../assests/images/card1.webp"),
    header21:"Hi, This is Nidhi Nagori",
    header22:"Exclusive Bonuses",
    subheader12:"Free Bonuses worth INR 20K will be revealed during the Masterclass to jumpstart your Dubai move!",
    subheader13:"(Get course resources, resume template, list of 50+ Dubai recruiting agencies & much more!)",
    header23:"FAQs",
    question1:"How many mentors will be there in the session?",
    answer1:"There will be 5 experienced mentors from diverse industries like HR, IT, Product Management, Marketing, and Operations.",
    question2:"Is this a live session, or will it be pre-recorded?",
    answer2:"The Masterclass will be a live interactive session held over Zoom. The recording will be available for 90 days from your registration date.",
    question3:"What if I want a refund?",
    answer3:"Unfortunately, do not offer refunds for the Masterclass.",
    question4:"How will I access the bonuses?",
    answer4:"The exclusive bonuses will be unveiled during the Masterclass. Once the session is over, you'll be able to access them easily within the Resources section on your course page.",
    question5:"Will I get a chance to ask my questions?",
    answer5:"Absolutely! There will be a dedicated Q&A session during the live masterclass where you can submit your questions through the chat box. The mentors will address each question to ensure you gain maximum value.",
    price:"Free",
    msrp:""
  }]
  
  // standard structure
  // headers: {
  //   main: ["HABIBI, COME TO", "DUBAI! 🏝️", "with Nidhi Nagori"],
  //   description: "In a comprehensive Masterclass on Dubai, unlock the secrets of building a global career in the City of Gold. Learn about immigration, visa sponsorship, job market scenario, job hunting strategies, insider tips and much more from the experts.",
  //   sections: {
  //     whatsInItForYou: "What’s In It For You?",
  //     bonuses: "Bonuses worth 20K",
  //     access: "3 Month Access",
  //     liveQA: "Live Q&A",
  //     dreamOnHold: "Is your dream of living abroad on hold?",
  //     studentsOrProfessionals: "Students or a Working Professionals",
  //     destinationDilemma: "Destination Dilemma?",
  //     futureResidents: "Future Residents",
  //     visaSeekers: "Visa Seekers",
  //     watchVideo: "Watch This Video Before You Move",
  //     whatWillYouLearn: "What will you learn in 2 Hours?",
  //     immigrationInsights: "Immigration Insights",
  //     jobHuntingStrategies: "Job Hunting Strategies",
  //     livingLikeLocal: "Living Like a Local",
  //     beyondBasics: "Beyond the Basics",
  //     hiNidhi: "Hi, This is Nidhi Nagori",
  //     exclusiveBonuses: "Exclusive Bonuses",
  //     faqs: "FAQs"
  //   }
  // },
  // subheaders: {
  //   bonuses: "Get exclusive complimentary bonuses during the session.",
  //   access: "The recording of the Live session can be accessed for 3 months from the date of sign-up.",
  //   liveQA: "Participants can directly ask questions to the mentors.",
  //   studentsOrProfessionals: "If you're considering relocating to Dubai but uncertain about the country's conditions, this masterclass is for you.",
  //   destinationDilemma: "Unsure which country is the perfect fit for you? Join us to gain clarity on whether Dubai aligns with your aspirations.",
  //   futureResidents: "Planning to relocate to Dubai, either now or in the future? Understand the immigration process and set yourself up for a successful transition with our expert advice.",
  //   visaSeekers: "Seeking visa sponsorship for your relocation? Gain insights into the job market and secure visa-sponsored opportunities with our guidance.",
  //   exclusiveBonusesDetails: "(Get course resources, resume template, list of 50+ Dubai recruiting agencies & much more!)",
  //   immigrationInsights: "Gain valuable insights into the immigration process, discover the pathways available for securing residency, understand visa types, sponsorship options, application process, etc.",
  //   jobHuntingStrategies: "Learn how to craft a compelling global resume, how to ace your interviews, and insights around the job market.",
  //   livingLikeLocal: "Get insider tips on finding accommodation, navigating transportation, cultural expectations and embracing the local lifestyle.",
  //   beyondBasics: "Get deeper information from 5 Mentors from various industries (HR, IT, Product Management, Marketing & Operations) & get your queries answered."
  // },
  // buttons: {
  //   registerNow: "REGISTER NOW!",
  //   limitedSeats: "LIMITED SEATS! ENROL NOW!"
  // },
  // links: {
  //   enroll: "",
  //   youtube: "https://www.youtube.com/watch?v=YEfLNcuXfRE"
  // },
  // timeDetails: {
  //   time: "",
  //   hours: ""
  // },
  // faqs: [
  //   {
  //     question: "How many mentors will be there in the session?",
  //     answer: "There will be 5 experienced mentors from diverse industries like HR, IT, Product Management, Marketing, and Operations."
  //   },
  //   {
  //     question: "Is this a live session, or will it be pre-recorded?",
  //     answer: "The Masterclass will be a live interactive session held over Zoom. The recording will be available for 90 days from your registration date."
  //   },
  //   {
  //     question: "What if I want a refund?",
  //     answer: "Unfortunately, do not offer refunds for the Masterclass."
  //   },
  //   {
  //     question: "How will I access the bonuses?",
  //     answer: "The exclusive bonuses will be unveiled during the Masterclass. Once the session is over, you'll be able to access them easily within the Resources section on your course page."
  //   },
  //   {
  //     question: "Will I get a chance to ask my questions?",
  //     answer: "Absolutely! There will be a dedicated Q&A session during the live masterclass where you can submit your questions through the chat box. The mentors will address each question to ensure you gain maximum value."
  //   }
  // ],
  // images: [
  //   "../assests/images/card1.webp",
  //   "../assests/images/card2.webp",
  //   "../assests/images/card3.webp",
  //   "../assests/images/card4.webp"
  // ]
  return (
    <div>
      <Course data = {data}/>
    </div>
  )
}

export default Dubai
