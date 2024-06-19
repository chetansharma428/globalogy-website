import React from "react";
import { Carousel } from "@mantine/carousel";
import {
  Paper,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Title,
  Tabs,
  Space,
} from "@mantine/core";
import "animate.css";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import dubai from "../../assests/images/Dubai.png";
import australia from "../../assests/images/Australia-mst.png";
import Luxembourg from "../../assests/images/Lux-mst.jpg";
import netherlands from "../../assests/images/netherlands-mst.png";
import uk from "../../assests/images/uk-mst.png";
import lnkd from "../../assests/images/LinkedIn-mst.png";
import canada from "../../assests/images/canada-mst.jpg";
import global from "../../assests/images/global-mst.jpg";
import profilebuilding from "../../assests/images/profilebuilding-mst.jpg";
import ireland from "../../assests/images/Ireland-mst.png";
import timer from "../../assests/images/fast-time.png";

const Services = () => {
  return (
    <div class="container-fluid">
      <div
        class="container text-light"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        {/* <div class="h2 fw-bold d-flex justify-content-center py-4">
          Popular Programs
        </div> */}
        <Tabs color="#237B54" defaultValue="first" variant="pills">
          <Tabs.List
            justify="center"
            class="d-flex justify-content-center align-items-center gap-4"
          >
            <Tabs.Tab value="first">
              <Text size="md" fw={600}>
                Masterclass
              </Text>
            </Tabs.Tab>
            {/* <Tabs.Tab value="second">
              <Text size="md" fw={600}>
                Campus Ambasador
              </Text>
            </Tabs.Tab> */}
            <Tabs.Tab value="third">
              <Text size="md" fw={600}>
                Blogs
              </Text>
            </Tabs.Tab>
            {/* <Tabs.Tab value="forth">
              <Text size="lg" fw={600}>Full Time</Text></Tabs.Tab> */}
          </Tabs.List>
          <Tabs.Panel value="first" pt="md" pb="md">
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "sm" }}
              loop
              align="start"
              nextControlIcon={<IconArrowRight />}
              previousControlIcon={<IconArrowLeft />}
            >
              <Carousel.Slide>
                {/* DUBAI MASTERCLASS */}
                {/* <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                    <Image
                      src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb62b128252df1fdab2e0a_-times-square-5-efe6a1a378ab406245c45704d8cf9eaf.png"
                      height={133}
                      alt="Norway"
                    />
                  </Card.Section>
                  <Group justify="space-between" mt="md">
                    <Text class="h5 fw-bold">Netherlands Masterclass</Text>
                    <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                      Newly added
                    </Badge>
                  </Group>
                  <Text size="sm">
                    A comprehensive 2-hour Masterclass on Australia covering
                    Immigration, Visa Sponsorship, Job Applications, Lifestyle,
                    and more!
                  </Text>
                  <div>
                    <Button
                      color="blue"
                      fullWidth
  2                  mt="md"
                      radius="md"
                      class="btn button-g fw-bold"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card> */}
                <a href="/masterclass">
                  <div class="card" style={{ width: "22rem", height: "30rem" }}>
                    <img
                      class="card-img-top"
                      src={dubai}
                      alt="Card image cap"
                    />
                    <div class="card-body d-flex justify-content-center flex-column">
                      <div class="d-flex justify-content-between align-items-center ">
                        <h5 class="card-title fw-bold h5">Dubai Masterclass</h5>
                        <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                          Newly added
                        </Badge>
                      </div>
                      <div class="d-flex justify-content-around flex-column">
                        <p class="card-text h6">
                          In a comprehensive Masterclass on Dubai, unlock the
                          secrets of building a global career in the City of
                          Gold. Learn about immigration, visa sponsorship, job
                          market scenario, job hunting strategies, insider tips
                          and much more from the experts.
                        </p>
                        <div>
                          <a href="/dubaimasterclass" class="btn button-g">
                            REGISTER NOW!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* AUSTRALIA MASTERCLASS */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img
                    class="card-img-top"
                    src={australia}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title fw-bold h5">
                        Australia Masterclass
                      </h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        A comprehensive 2-hour Masterclass on Australia covering
                        Immigration, Visa Sponsorship, Job Applications,
                        Lifestyle, and more! Dreaming of building a career in
                        the land of sunshine and opportunity? Get ready to know
                        the secrets from 4 Industry Experts.
                      </p>
                      <div>
                        <a href="/australiamasterclass" class="btn button-g">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* Luxembourg Masterclass*/}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img
                    class="card-img-top"
                    src={Luxembourg}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">
                        Luxembourg & France Masterclass
                      </h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        They are facing labour challenges. France & Luxembourg
                        need 200,000 workers by 2030! Register to learn about
                        immigration, visa sponsorship, job market scenario, job
                        hunting strategies, insider tips and much more from the
                        experts.
                      </p>
                      <div>
                        <a href="/luxembourgmasterclass" class="btn button-g">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* UK MASTERCLASS */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img class="card-img-top" src={uk} alt="Card image cap" />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">UK Masterclass</h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        Unlock your British adventure with our exclusive 2 Hour
                        Masterclass! Demystify the immigration process, secure
                        visa sponsorships, craft flawless job applications, and
                        discover how to thrive in your new home in the UK!
                      </p>
                      <div>
                        <a href="/ukmasterclass" class="btn button-g">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* Linkedin-1 */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img class="card-img-top" src={lnkd} alt="Card image cap" />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">
                        LinkedIn & Professional Brand Building
                      </h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        In this exclusive 2-hour Masterclass, you'll unlock the
                        secrets to building a powerful LinkedIn profile and
                        crafting a personal brand that gets you noticed by the
                        right people. Explore the hidden gems of LinkedIn. Go
                        beyond the resume!
                      </p>
                      <div>
                        <a href="/linkedinonemasterclass" class="btn button-g ">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* NETHERLANDS */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img
                    class="card-img-top"
                    src={netherlands}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">
                        The Netherlands Masterclass
                      </h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        An exclusive Masterclass for living & working in the
                        Netherlands. Explore visa options, craft winning job
                        applications, secure sponsorships, and discover the ins
                        and outs of Dutch life. This 2-day Masterclass unlocks
                        the secrets to a smooth move to the Netherlands!
                      </p>
                      <div>
                        <a href="/netherlandsmasterclass" class="btn button-g">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* IRELAND */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img
                    class="card-img-top"
                    src={ireland}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">
                        The Ireland Masterclass
                      </h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        This exclusive 2 hour Masterclass unlocks the secrets to
                        a smooth move to Ireland! Explore visa options, craft
                        winning job applications, secure sponsorships, and
                        discover the charm of Irish life. Make your dream a
                        reality!
                      </p>
                      <div>
                        <a href="/irelandmasterclass" class="btn button-g">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* CANADA-1 */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img class="card-img-top" src={canada} alt="Card image cap" />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">Canada Masterclass</h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        Did you know Canada has not one but multiple pathways to
                        enter and live in the country? This masterclass will
                        help you plan your move & settle in Canada. It will help
                        you wherever you are in your immigration journey.
                      </p>
                      <div>
                        <a href="/canadamasterclass" class="btn button-g">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* Linkedin-2 */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img class="card-img-top" src={lnkd} alt="Card image cap" />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">
                        LinkedIn & Professional Brand Building
                      </h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        In this exclusive 2-hour Masterclass, you'll unlock the
                        secrets to building a powerful LinkedIn profile and
                        crafting a personal brand that gets you noticed by the
                        right people. Explore the hidden gems of LinkedIn. Go
                        beyond the resume!
                      </p>
                      <div>
                        <a href="/linkedinonemasterclass" class="btn button-g ">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* PROFILE BUILDING  */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img
                    class="card-img-top"
                    src={profilebuilding}
                    alt="Card image cap"
                  />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">
                        Profile Building For Career Abroad
                      </h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        5M+ jobs are open to Foreigners in Canada, USA,
                        UK,Europe, Australia and more, but having the right
                        profile can be a barrier. This MasterClass is designed
                        to teach you how to build a strong profile that will
                        help you land your dream job abroad.
                      </p>
                      <div>
                        <a
                          href="/profilebuildingmasterclass"
                          class="btn button-g"
                        >
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                {/* global masterclass */}
                <div class="card" style={{ width: "22rem", height: "30rem" }}>
                  <img class="card-img-top" src={global} alt="Card image cap" />
                  <div class="card-body d-flex justify-content-center flex-column">
                    <div class="d-flex justify-content-between align-items-center ">
                      <h5 class="card-title h5 fw-bold">
                        Global Masterclass
                      </h5>
                      <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                        Newly added
                      </Badge>
                    </div>
                    <div class="d-flex justify-content-around flex-column">
                      <p class="card-text h6">
                        The world is your oyster! Over the past few years,
                        record labour shortages in high-income countries have
                        created a great demand for international workers,
                        professionals, and students. Unlock your global
                        potential!
                      </p>
                      <div>
                        <a href="/globalmasterclass" class="btn button-g">
                          REGISTER NOW!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            </Carousel>
          </Tabs.Panel>
          {/* <Tabs.Panel value="second" pt="md">
            <div class="d-flex justify-content-center align-items-center gap-2">
              <img
                src={timer}
                class="img-fluid rounded-top"
                alt=""
                style={{width:"122px", height:"128px"}}
              />
              <div class="display-3">Coming soon!</div>
            </div>
          </Tabs.Panel> */}
          <Tabs.Panel value="third" pt="md">
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "lg" }}
              loop
              align="start"
            >
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="sm" className={classes.card1}>
                  <div>
                    <Text className={classes.category} size="xs">
                      IMMIGRATION | JOB MARKET
                    </Text>
                    <Title order={3} className={classes.title}>
                      Canada Business Visa: A Comprehensive Guide
                    </Title>
                  </div>
                  <Button
                    class="btn button-g text-light fw-bold"
                    href="https://globalogy.in/blog/how-to-find-a-job-in-europe/"
                  >
                    Read article
                  </Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card2}>
                  <div>
                    <Text className={classes.category} size="xs">
                      JOB MARKET
                    </Text>
                    <Title order={3} className={classes.title}>
                      Top 5 Job Opportunities in Belgium in 2024
                    </Title>
                  </div>
                  <Button
                    class="btn button-g text-light fw-bold"
                    href="https://globalogy.in/blog/top-5-job-opportunities-in-belgium-in-2024/"
                  >
                    Read article
                  </Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card3}>
                  <div>
                    <Text className={classes.category} size="xs">
                      IMMIGRATION
                    </Text>
                    <Title order={3} className={classes.title}>
                      Top 10 Powerful Passports in the World in 2024
                    </Title>
                  </div>
                  <Button
                    class="btn button-g text-light fw-bold"
                    href="https://globalogy.in/blog/top-10-powerful-passport/"
                  >
                    Read article
                  </Button>
                </Paper>
              </Carousel.Slide>
            </Carousel>
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
