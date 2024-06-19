import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Support from "./Support";
import Testimonials from "./ui/Testimonials";
import Verticalstepper from "./ui/Verticalstepper";
import About from "./ui/About";
import image from "../assests/images/Faq_image.svg";
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import classes from "./ui/Navbar.module.css";

const Directjobplacement = () => {
  const data = [
    {
      header: "Launch Your European Career 🇪🇺",
      subheader: "Direct Job Placements (Blue-Collar Jobs)",
      subhead1:
        "Launch your European career with our zero-recruitment fee program! This is your chance to live and work in Europe. Our program is open to everyone with a High School Diploma (Class 12) or higher and offers guaranteed job placement with a Work Permit, Residence Permit, and even Accommodation assistance. Plus, no recruitment fees! Limited spots are available for those with a High School Diploma (Class 12) and a valid Passport. Don't miss out - Spots are limited!",
      li1: "Building your professional profile from scratch (Resume, LinkedIn, etc.)",
      li2: "Identifying the right countries for you",
      li3: "Doing job applications",
      li4: "Networking on your behalf",
      subheaderbutton: "Connect Now!",
      dp: require("../assests/images/Visasupportdp.png"),
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
      header: "Key Benefits of the Program:",
      subhead: "",
      stepheader: "",
      step1: "Collateral-Free Loan:",
      point1: "Focus on your studies without the burden of upfront tuition costs. Repay the loan only if you choose to stay in Canada after graduation.",
      step2: "Work Permit and PR Pathway:",
      point2:
        " Gain valuable Canadian work experience with a built-in work permit and a clear path towards permanent residency.",
      step3: "Flexible Loan Term:",
      point5:
        "The 7-year loan term allows for manageable repayments, with no penalties for early settlement.",
      step4: "High-Demand Courses:",
      point6:
        "Choose from a selection of 10+ in-demand programs aligned with Canada's labour market needs, increasing your earning potential.",
      step5: "Living Cost Assistance:",
      point7:
        " Receive a monthly stipend of CAD $1700 for the first 12 months to help cover your living expenses.",
    },
  ];
  const FooterData = [
    {
      header1: "Ready to make your move?",
      header2:
        "Don't let the dream of an international career remain just a dream. Take the first step towards a fulfilling and exciting professional journey on the global stage.",
      button1: "Get Started Now!",
    },
  ];
  const question1 = "How many mentors will be there in the session?";
   const answer1="There will be 5 experienced mentors, each of whom used a different pathway to move to Canada.";
   const question2 = "Is this a live session, or will it be pre-recorded?";
   const answer2 = "The Masterclass will be a live interactive session held over Zoom. The recording will be available for 90 days from your registration date.";
   const question3 = "What if I want a refund?";
   const answer3="Unfortunately, do not offer refunds for the Masterclass.";
   const question4 = "How will I access the bonuses?";
   const answer4 = "The exclusive bonuses will be unveiled during the Masterclass. Once the session is over, you'll be able to access them easily within the Resources section on your course page.";
   const question5 = "Will I get a chance to ask my questions?";
   const answer5 = "Absolutely! There will be a dedicated Q&A session during the live masterclass where you can submit your questions through the chat box. The mentors will address each question to ensure you gain maximum value.";
  return (
    <div>
      <Navbar />
      <Support data={data} />
      <Verticalstepper data={data} />
      {/* <Services/> */}
      {/* <Competitive/> */}
      {/* <Achievements/> */}
      <Testimonials />
      {/* <Bottomform/> */}
      {/* <Social/> */}
      <div class="faq">
        <div class="container-fluid bg-light" style={{ paddingBottom: "4rem" }}>
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
                      <Accordion.Control>{question1}</Accordion.Control>
                      <Accordion.Panel>{answer1}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item
                      className={classes.item}
                      value="another-account"
                    >
                      <Accordion.Control>{question2}</Accordion.Control>
                      <Accordion.Panel>{answer2}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className={classes.item} value="newsletter">
                      <Accordion.Control>{question3}</Accordion.Control>
                      <Accordion.Panel>{answer3}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item
                      className={classes.item}
                      value="credit-card"
                    >
                      <Accordion.Control>{question4}</Accordion.Control>
                      <Accordion.Panel>{answer4}</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className={classes.item} value="credit">
                      <Accordion.Control>{question5}</Accordion.Control>
                      <Accordion.Panel>{answer5}</Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </Grid.Col>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} />
    </div>
  );
};

export default Directjobplacement;
