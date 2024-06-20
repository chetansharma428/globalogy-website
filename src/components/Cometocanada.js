import React from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import Support from "./Support";
import Verticalstepper from "./ui/Verticalstepper";
import About from "./ui/About";
import Testimonials from "./ui/Testimonials";
import image from "../assests/images/Faq_image.svg";
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import classes from "./ui/Navbar.module.css";

const Cometocanada = () => {
  const data = [
    {
      header: "Your Gateway to a Brighter Future in Canada 🇨🇦 :",
      subheader: "Come to Canada Program",
      subhead1:
        "The Come to Canada Program offers a unique and accessible pathway for international students & professionals to pursue their educational aspirations in Canada. This program runs in collaboration with George Brown College. We understand the financial challenges associated with studying abroad, and that's why our program provides a collateral-free loan to cover your tuition fees. This is by far the Cheapest & Smartest way to move to Canada.",
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
   const question1 = "What are the 15 in-demand programs offered?";
   const answer1="We don't publish the specific program list here to ensure we align with the evolving job market needs. However, during the application process, you'll be presented with a selection of relevant programs based on your academic background and career goals.";
   const question2 = "Can I extend the living cost assistance beyond 12 months?";
   const answer2 = "The CAD $1700 monthly stipend is provided for the first year to help you establish yourself in Canada. After that, you can rely on part-time work income and potential scholarships to manage your living expenses.";
   const question3 = "What happens if my visa application gets rejected?";
   const answer3="We understand that visa applications can be stressful. That's why the Come to Canada Program offers a full refund of your initial investment within 48 hours of your visa rejection.";
   const question4 = "What tests do I need to take to prove my English language proficiency, and what scores are required?";
   const answer4 = "To be eligible you must take one of the following English language tests and achieve the minimum score: • IELTS (Academic): Overall score of 6.0, with a minimum of 5.5 in each band. (Test validity: 2 years) • TOEFL: Minimum score of 80 overall, with a minimum of 20 in each section. (Test validity: 2 years) • PTE Academic: Minimum score of 54, with a minimum of 50 in each band. (Test validity: 2 years) • Duolingo English Test: Minimum score of 110. (Test validity: 2 years)";
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

export default Cometocanada;
