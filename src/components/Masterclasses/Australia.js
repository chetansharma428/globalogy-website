import React from 'react'
import Course from '../Course'
import Footer from '../ui/Footer';

const Australia = () => {
  const data =[{
    header1:"CRACK THE CODE TO",
    header2:"AUSTRALIA 🦘",
    header3:"with Nidhi Nagori",
    header4:"A comprehensive 2-hour Masterclass on Australia covering Immigration, Visa Sponsorship, Job Applications, Lifestyle, and more! Dreaming of building a career in the land of sunshine and opportunity? Get ready to know the secrets from 4 Industry Experts.",
    time:"",
    hours:"2 hours",
    date:"",
    Enroll_link:"",
    button1:"REGISTER NOW!",
    header5:"What’s In It For You?",
    header6:"Agency List",
    subheader1:"Get exclusive access to a list of 75+ recruiting agencies to look for jobs along with a resume template.",
    header7:"3 Month Access",
    subheader2:"The recording of the Live session can be accessed for 3 months from the date of sign-up.",
    header8:"Live Q&A",
    subheader3:"Participants can directly ask questions to the mentors.",
    header9:"Yearning for a Life Less Ordinary?",
    header10:"This Masterclass is for YOU if you're ready to ditch the daydream and make your global dreams a reality.",
    header11:"Students or a Working Professionals",
    subheader4:"If you're considering relocating to Australia but uncertain about the country's conditions, this masterclass is for you.",
    header12:"Destination Dilemma?",
    subheader5:"Unsure which country is the perfect fit for you? Join us to gain clarity on whether Australia aligns with your aspirations.",
    header13:"Future Residents",
    subheader6:"Planning to relocate to Australia, either now or in the future? Understand the immigration process and set yourself up for a successful transition with our expert advice.",
    header14:"Visa Seekers",
    subheader7:"Seeking visa sponsorship for your relocation? Gain insights into the job market and secure visa-sponsored opportunities with our guidance.",
    button2:" LIMITED SEATS! ENROL NOW!",
    header15:"Watch This Video Before You Move",
    ytlink:"https://youtu.be/3idZAep7Edg",
    header16:"What will you learn in 2 Hours?",
    header17:"Aussie Pathways",
    subheader8:"Explore all the different pathways to move to Australia. We'll break down the pros and cons of each option to help you choose the best fit for your goals.",
    header18:"Land Your Dream Job",
    subheader9:"Gain insider tips on crafting a resume that grabs attention, acing interviews like a pro, and navigating job sponsorships to secure your dream role.",
    header19:"Live Like a Local",
    subheader10:"Our Masterclass dives into the realities of daily life Down Under. Learn how to find the perfect accommodation, navigate transportation systems, and embrace the unique Australian culture.",
    header20:"Become an Insider",
    subheader11:"Get exclusive advice from our expert mentors who have built successful lives in Australia. They'll share invaluable tips on everything from understanding local customs to ensuring a smooth and seamless transition.",
    card1img:require("../../assests/images/card1.webp"),
    card2img:require("../../assests/images/card1.webp"),
    card3img:require("../../assests/images/card1.webp"),
    card4img:require("../../assests/images/card1.webp"),
    header21:"Hi, This is Nidhi Nagori",
    header22:"Exclusive Bonus",
    subheader12:"Free Bonuses worth INR 20K will be revealed during the Masterclass to jumpstart your Australia move!",
    subheader13:"(Get course resources, resume template, list of 75+ recruiting agencies & much more!)",
    header23:"FAQs",
    question1:"How many mentors will be there in the session?",
    answer1:"There will be 4 experienced mentors from diverse industries like Marketing, Finance, Public Relations etc who have either PR or are on Work Permit.",
    question2:"Is this a live session, or will it be pre-recorded?",
    answer2:"The Masterclass will be a live interactive session held over Zoom. The recording will be available for 90 days from your registration date.",
    question3:"What if I want a refund?",
    answer3:"Unfortunately, do not offer refunds for the Masterclass.",
    question4:"How will I access the bonuses?",
    answer4:"The exclusive bonuses will be unveiled during the Masterclass. Once the session is over, you'll be able to access them easily within the Resources section on your course page.",
    question5:"Will I get a chance to ask my questions?",
    answer5:"Absolutely! There will be a dedicated Q&A session during the live masterclass where you can submit your questions through the chat box. The mentors will address each question to ensure you gain maximum value.",
    price:"",
    msrp:"",
  }];
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

export default Australia
