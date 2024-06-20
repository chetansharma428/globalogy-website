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
      point1:
        "Focus on your studies without the burden of upfront tuition costs. Repay the loan only if you choose to stay in Canada after graduation.",
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
  const question1 = "What skills or experience do I need for these blue-collar jobs?";
  const answer1 =
    "The specific skills and experience required will vary depending on the job type. Some roles may require specific technical skills or experience with operating machinery. We will work with you to identify suitable positions based on your background and qualifications.";
  const question2 = "Is there any financial assistance available for the program costs?";
  const answer2 =
    "Unfortunately, we do not currently offer direct financial assistance for consultation costs.";
  const question3 = "What happens if my visa application gets rejected?";
  const answer3 = "Unfortunately, do not offer refunds for the Masterclass.";
  const question4 = "How will I access the bonuses?";
  const answer4 =
    "The exclusive bonuses will be unveiled during the Masterclass. Once the session is over, you'll be able to access them easily within the Resources section on your course page.";
  const question5 = "Will I get a chance to ask my questions?";
  const answer5 =
    "Absolutely! There will be a dedicated Q&A session during the live masterclass where you can submit your questions through the chat box. The mentors will address each question to ensure you gain maximum value.";
  //  stepper points
  const header = "";
  const subhead = "";
  const stepheader = "";
  const step1 = "Countries Available:";
  const point1 =
    "Focus on your studies without the burden of upfront tuition costs. Repay the loan only if you choose to stay in Canada after graduation.";
  const step2 = "Who is this for?";
  const point2 =
    " Gain valuable Canadian work experience with a built-in work permit and a clear path towards permanent residency.";
  const step3 = "Why choose this program?";
  const point5 =
    "The 7-year loan term allows for manageable repayments, with no penalties for early settlement.";
  const step4 = "Our Comprehensive Support Services Include:";
  const point6 =
    "Choose from a selection of 10+ in-demand programs aligned with Canada's labour market needs, increasing your earning potential.";
  const step5 = "Transparent Payment Structure:";
  const point7 =
    " Receive a monthly stipend of CAD $1700 for the first 12 months to help cover your living expenses.";
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
      {/* <Verticalstepper data={data} /> */}
      <div
        class="container-fluid bg-light"
        style={{ paddingTop: "8rem", paddingBottom: "2rem" }}
      >
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center gap-2 flex-column ">
            <div class="d-flex justify-content-center align-items-center gap-2">
              <div class=" d-flex justify-content-start"></div>
              <div class="d-flex justify-content-center align-items-center flex-column">
                <div class="col h1 fw-bold text-center ">{header}</div>
                <p class="text-center h6">{subhead}</p>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <div class="stepper d-flex flex-column mt-5 ml-2 w-75">
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                      1
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div class="px-2">
                    <div class="h4 fw-bold">{step1}</div>
                    <div class="h5">
                      <li>Czech Republic</li>
                      <li>Germany</li>
                      <li>Austria</li>
                      <li>Poland</li>
                      <li>Hungary</li>
                      <li>Croatia</li>
                      <li>Lithuania</li>
                      <li>Albania</li>
                      <li>Slovakia</li>
                    </div>
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                      2
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div class="px-2">
                    <div class="h4 fw-bold">{step2}</div>
                    <div class="h5">
                      <li>Individuals looking for Blue Collar Jobs</li>
                      <li>Individuals with Diplomas, Bachelor's Degrees, or High School Education (10th or 12th grade)</li>
                      <li>Anyone seeking immediate employment and relocation to Europe</li>
                    </div>
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                      3
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div class="px-2">
                    <div class="h4 fw-bold">{step3}</div>
                    <div class="h5">
                      <li><span class="fw-bold">Zero Recruitment Fees:</span> You only pay our transparent consultation fee.</li>
                      <li><span class="fw-bold">12th Pass & Ready to Go?</span> Our program is open to everyone who has completed Class 12.</li>
                      <li><span class="fw-bold">Visa Guarantee:</span> If a visa gets rejected because of our fault, we'll appeal, apply elsewhere, or refund you.</li>
                      <li><span class="fw-bold">Guaranteed Placement:</span> Employment is provided with Work Permit, Residence Permit, and Accommodation.</li>
                      <li><span class="fw-bold">Looking for PR?</span>  Get eligible to Permanent Residency (PR) in 5 years.</li>
                    </div>
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                      4
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div class="px-2">
                    <div class="h4 fw-bold">{step4}</div>
                    <div class="h5">
                      <li>Job Placement Assistance</li>
                      <li>Document Preparation</li>
                      <li>Visa Interview Booking & Preparation</li>
                      <li>Flight Booking & Airport Transfer</li>
                      <li>Bank Account Opening Assistance</li>
                      <li>Remittance Assistance (Sending Money Back Home)</li>
                      <li>Legal Agreement for Your Protection</li>
                    </div>
                  </div>
                </div>
                <div class="d-flex mb-1">
                  <div class="d-flex flex-column pr-4 align-items-center">
                    <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                      5
                    </div>
                    <div class="line h-100"></div>
                  </div>
                  <div class="px-2">
                    <div class="h4 fw-bold">{step5}</div>
                    <div class="h5">
                      <li>20% Down Payment to Start the Process</li>
                      <li>30% Payment After Work Permit Approval</li>
                      <li>50% Payment After Visa Approval</li>
                    </div>
                  </div>
                </div>
                <div class="d-flex mb-1">
                <div class="d-flex flex-column pr-4 align-items-center">
                  <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                    6
                  </div>
                  <div class="line h-100"></div>
                </div>
                <div class="px-2">
                  <div class="h6">Requirements:</div>
                  <div class="h5">
                      <li>Valid Passport (6+ Months Validity)</li>
                      <li>CV/Resume</li>
                      <li>Class 12 Marksheet/Certificate (or Highest Qualification)</li>
                      <li>Age Under 55 Years Old</li>
                    </div>
                </div>
              </div>
              {/* <div class="d-flex mb-1">
                <div class="d-flex flex-column pr-4 align-items-center">
                  <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                    7
                  </div>
                  <div class="line h-100"></div>
                </div>
                <div class="px-2">
                  <div class="h6">{step7}</div>
                  <li class="h6 fw-normal  pb-3">{point11}</li>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
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
