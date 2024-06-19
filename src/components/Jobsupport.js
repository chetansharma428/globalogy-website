import React from "react";
import Herosection from "./ui/Herosection";
import Services from "./ui/Services";
import About from "./ui/About";
import Competitive from "./ui/Competitive";
import Verticalstepper from "./ui/Verticalstepper";
import Achievements from "./ui/Achievements";
import Bottomform from "./ui/Bottomform";
import Testimonials from "./ui/Testimonials";
import Social from "./ui/Social";
import Support from "./Support";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import image from "../assests/images/Faq_image.svg";
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import classes from "./ui/Navbar.module.css";

const Jobsupport = () => {
  const data = [
    {
      header: "Land Your Dream Job Abroad: ",
      subheader:"Job Support Service",
      subhead1:
        "Did you know millions dream of working abroad, but only a fraction make it a reality? The global job market is brimming with opportunities, with companies actively seeking skilled individuals from diverse backgrounds. We bridge the gap between your aspirations and international success. Our personalised Job Support Service is your one-stop shop for navigating the exciting (and sometimes complex) world of international job hunting.",
      li1: "Building your professional profile from scratch (Resume, LinkedIn, etc.)",
      li2: "Identifying the right countries for you",
      li3: "Doing job applications",
      li4: "Networking on your behalf",
      subheaderbutton: "Connect Now!",
      dp: require("../assests/images/JobSupportDp.png"),
      users: require("../assests/images/user 1.png"),
      studentnum: "35000+ Happy Students",
      box1header: "2500+",
      box1subhead: "Candidates Benifited",
      box2header: "150+",
      box2subhead: "Linkedin profile Enhanced",
      box3header: "60K+",
      box3subhead: "Jobs Applied till now",
      box4header: "150+",
      box4subhead: "Resume Optimised",
    },
    {
      header: "Here's why Globalogy is your key to unlocking global career success:",
      subhead: "",
      stepheader: "",
      step1: "Unleash Your Global Potential:",
      point1: "We go beyond a simple resume revamp. We delve into your background, skills, and career goals to craft a personalised strategy that highlights your unique value proposition to international employers.",
      step2: "Targeted Applications, Maximum Impact:",
      point2:
        " We don't believe in a one-size-fits-all approach. We strategically submit your application to a diverse mix of platforms – from specialised job boards and international recruitment agencies to industry-specific portals and strategic LinkedIn networking.",
      step3: "Expert Guidance Every Step of the Way:",
      point5:
        "You'll have a dedicated Point of Contact by your side throughout the process, offering personalised support, expert advice, and ongoing communication.",
      step4: "Data-Driven Strategy Refinement:",
      point6:
        "We continuously analyse progress and adapt our approach based on results. After every milestone, we collaborate with you to ensure your application strategy remains optimised for maximum impact.",
      step5: "Peace of Mind & Confidence:",
      point7:
        "Focus on your career goals while we handle the legwork. Receive bi-weekly reports on your application progress, empowering you to stay informed and involved.",
    },
  ];
  const FooterData = [{
    header1:"Ready to make your move?",
    header2:"Don't let the dream of an international career remain just a dream. Take the first step towards a fulfilling and exciting professional journey on the global stage.",
    button1:"Get Started Now!",
  }];
  
   const question1 = "What types of jobs can I apply for with your service?";
   const answer1="Our service caters to a wide range of white-collar professions. During our consultation, we'll discuss your specific background and identify the most relevant international opportunities.";
   const question2 = "How long does it take to find a job abroad?";
   const answer2 = "Time frames vary depending on the industry, job role, and market demand. However, our personalised approach and strategic application strategy significantly improve your chances of landing interviews and securing your dream position.";
   const question3 = "Do you provide a job guarantee?";
   const answer3="With the Job Support Service (non blue collar jobs), there is no guarantee. 84% of our JSS clients have heard from the recruiters with many interviews scheduled & offers released.";
   const question4 = "What's included in the one-month Job Support Service?";
   const answer4 = "Our one-month Job Support Service provides a comprehensive package to maximise your chances of landing your dream job abroad. Here's what you can expect:- Expert Profile Analysis & Optimization- Strategic Application Mix (300 Applications) 220 Job Applications + 50 Email Networking Applications + 100 LinkedIn Networking Applications & much more!";
  
  return (
    <div>
      <Navbar />
      <Support data={data} />
      <Verticalstepper data={data} />
      {/* <Services/> */}
      {/* <About /> */}
      {/* <Competitive/> */}
      {/* <Achievements/> */}
      <Testimonials />
      {/* <Bottomform/> */}
      {/* <Social/> */}
      <div class="faq">
          <div
            class="container-fluid bg-light"
            style={{ paddingBottom: "4rem" }}
          >
            <div className={classes.wrapper}>
              <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Image src={image} alt="Frequently Asked Questions" />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Title order={2} ta="left" className={classes.title_fq}>
                      Frequently Asked Questions
                    </Title>

                    <Accordion
                      chevronPosition="right"
                      defaultValue="reset-password"
                      variant="separated"
                    >
                      <Accordion.Item
                        className={classes.item}
                        value="reset-password"
                      >
                        <Accordion.Control>
                          {question1}
                        </Accordion.Control>
                        <Accordion.Panel>{answer1}</Accordion.Panel>
                      </Accordion.Item>

                      <Accordion.Item
                        className={classes.item}
                        value="another-account"
                      >
                        <Accordion.Control>
                        {question2}
                        </Accordion.Control>
                        <Accordion.Panel>{answer2}</Accordion.Panel>
                      </Accordion.Item>

                      <Accordion.Item
                        className={classes.item}
                        value="newsletter"
                      >
                        <Accordion.Control>
                        {question3}
                        </Accordion.Control>
                        <Accordion.Panel>{answer3}</Accordion.Panel>
                      </Accordion.Item>

                      <Accordion.Item
                        className={classes.item}
                        value="credit-card"
                      >
                        <Accordion.Control>
                        {question4}
                        </Accordion.Control>
                        <Accordion.Panel>{answer4}</Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                  </Grid.Col>
                </Grid>
              </Container>
            </div>
          </div>
      </div>
      <Footer FooterData={FooterData}/>
    </div>
  );
};

export default Jobsupport;
