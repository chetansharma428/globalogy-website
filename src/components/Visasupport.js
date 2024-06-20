import React from "react";
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

const Visasupport = () => {
  const data = [
    {
      header: "Work ",
      subheader:"Visa Support",
      subhead1: "More than 10+ countries are offering Job Seeker Visa, Digital Nomad Visa, and PR. Canada, Australia, UAE, etc. are being the  top countries in the list. We offer end-to-end Visa service to people like you who want to move abroad. Our Visa Experts have helped 100+ people get visa. Want to increase your chances of moving abroad? 63% of the people in the world want to move abroad but don't have the time to look for a job or don’t know how to get started. We offer tailored support, valuable insights, and guidance to help you identify job opportunities in the international job market",
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
      header: "Get to know Our Visa Process",
      subhead: "Get clear Roadmap for every step",
      stepheader: "Get and overview of how Our Job support Service Works",
      step1: "Step 1: Application Submission",
      point1: "Fill out our Application form",
      step2: "Step 2: Application Review",
      point2:
        "Our Job support Team will be reviewing your application with Keywords respect to the position and country you wanna move to.",
      point3: "You will get an email irrespective of your profile.",
      point4:
        "Whatsapp message will be sent. if you are interested the team willl review your CV.",
      step3: "Step 3: Get a Call Back",
      point5:
        "If your Resume is approved expect a call back within 24-48 hours.",
      step4: "Step 4: Payment",
      point6:
        "Once the Payment is done they will get onboarded and getting a welcome mail as well.",
      step5: "Step 5: Resume Building and LinkedIn Updation",
      point7:
        "The resume development expert will connect with you for a pre-development discussion for assessing the overall experience and target roles.",
      point8:
        "The resume is developed as per the ATS compliance and PAN Global standards.",
      step6: "Step 6:  Applying for Job Abroad",
      point9:
        "The next step  will be our team will be connecting with HR’s in place of you and applying for Job as well.",
      point10: "You will also be getting a biweekly report from our team.",
      step7: "Step 7: Land an Interview",
      point11:
        "Get landed with a lot of Interview Calls and Fly to your dream destination with a career in hand",
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
      {/* Alert section */}
      <div class="alert fixed-bottom d-flex justify-content-center mb-0">
        <div
          class=" alert-dismissible fade show m-0 border-0 text-center text-light"
          role="alert"
        >
          <strong>Unlock the Great White North: </strong> Your Guide to Canada{" "}
          <span class="">
            <button class="check btn button-g fw-bold">
              {" "}
              Check-it-out
              <div class="glare"></div>
            </button>
          </span>
        </div>
        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="btn-close text-light"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
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

export default Visasupport;
