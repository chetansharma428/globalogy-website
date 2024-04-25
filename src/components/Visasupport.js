import React from 'react'
import Services from './ui/Services';
import About from './ui/About';
import Competitive from './ui/Competitive';
import Verticalstepper from './ui/Verticalstepper';
import Achievements from './ui/Achievements';
import Bottomform from './ui/Bottomform';
import Testimonials from './ui/Testimonials';
import Social from './ui/Social';
import Footer from './ui/Footer';
import Support from './Support';

const Visasupport = () => {
  const data =[
    {
      header:"Visa Support Service",
      subhead1:"We do Everything for you:",
      li1:"Building your professional profile from scratch (Resume, LinkedIn, etc.)",
      li2:"Identifying the right countries for you",
      li3:"Doing job applications",
      li4:"Networking on your behalf",
      subheaderbutton:"Connect Now!",
      dp:require("../assests/images/Visasupportdp.png"),
      users:require("../assests/images/user 1.png"),
      studentnum:"35000+ Happy Students",
      box1header:"2500+",
      box1subhead:"Candidates Benifited",
      box2header:"150+",
      box2subhead:"Linkedin profile Enhanced",
      box3header:"60K+",
      box3subhead:"Jobs Applied till now",
      box4header:"150+",
      box4subhead:"Resume Optimised"
    },
    {
      header:"Get to know Our Visa Process",
      subhead:"Get clear Roadmap for every step",
      stepheader: "Get and overview of how Our Job support Service Works",
      step1: "Step 1: Application Submission",
      point1: "Fill out our Application form",
      step2:"Step 2: Application Review",
      point2:"Our Job support Team will be reviewing your application with Keywords respect to the position and country you wanna move to.",
      point3:"You will get an email irrespective of your profile.",
      point4:"Whatsapp message will be sent. if you are interested the team willl review your CV.",
      step3:"Step 3: Get a Call Back",
      point5:"If your Resume is approved expect a call back within 24-48 hours.",
      step4:"Step 4: Payment",
      point6:"Once the Payment is done they will get onboarded and getting a welcome mail as well.",
      step5:"Step 5: Resume Building and LinkedIn Updation",
      point7:"The resume development expert will connect with you for a pre-development discussion for assessing the overall experience and target roles.",
      point8:"The resume is developed as per the ATS compliance and PAN Global standards.",
      step6:"Step 6:  Applying for Job Abroad",
      point9:"The next step  will be our team will be connecting with HR’s in place of you and applying for Job as well.",
      point10:"You will also be getting a biweekly report from our team.",
      step7:"Step 7: Land an Interview",
      point11:"Get landed with a lot of Interview Calls and Fly to your dream destination with a career in hand",
    }
  ]
  return (
    <div>
      <Support data={data}/>
      <Verticalstepper data={data}/>
      <Services/>
      <About/>
      <Competitive/>
      <Achievements/>
      <Testimonials/>
      <Bottomform/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default Visasupport;
