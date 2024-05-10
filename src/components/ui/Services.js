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
} from "@mantine/core";
import classes from "./Navbar.module.css";

import { Tilt } from "react-tilt";
import visasupport from "../../assests/images/visa.png";
import jobsupport from "../../assests/images/job.png";
import glowarrow from "../../assests/images/glowarrow.png";

const Services = () => {
  return (
    <div>
      {/* <div class="container" style={{ padding: "50px 0px" }}>
        <div class="row d-flex justify-content-center align-items-center py-4">
          <div class="col-7 d-flex justify-content-end">
            <div class="h2 fw-bold">Our Services</div>
          </div>
          <div class="col">
            <div class=" d-flex justify-content-end">
              <img src={glowarrow} class="img-fluid rounded-top" alt="" />
            </div>
          </div>
        </div>
        <div class="row justify-content-center align-items-center g-2 gap-4">
          <div class=" col-lg-6 col-sm-12">
            <Tilt options={defaultOptions}>
              <div class="mid row d-flex justify-content-center align-items-center flex-column g-2">
                <div class="col logo d-flex justify-content-start align-items-center">
                  .<img src={visasupport} class="img-fluid " alt="" />
                </div>
                <div class="col">
                  <div class="h4 text-danger fw-bold">Work Visa Support</div>
                </div>
                <div class="col h6 fw-normal">
                  <p>
                    Want to move abroad without a job? There are countries that
                    allow you to move in with a Job Seeker Visa, Digital Nomad
                    Visa, and Passive Income Visa and live there for a period of
                    time. We help you navigate the complex approval process for
                    these new-age. visas.
                  </p>
                </div>
                <div class="col">
                  <a
                    name=""
                    id=""
                    class="btn btn-primary h6"
                    href="/visasupport"
                    role="button"
                  >
                    Try it Yourself
                  </a>
                </div>
              </div>
            </Tilt>
          </div>
          <div class=" col ">
            <Tilt options={defaultOptions}>
              <div class="mid row d-flex justify-content-center align-items-center flex-column g-2">
                <div class="col logo d-flex justify-content-start align-items-center">
                  .<img src={jobsupport} class="img-fluid " alt="" />
                </div>
                <div class="col">
                  <div class="h4 text-primary fw-bold">Job Support Service</div>
                </div>
                <div class="col h6 fw-normal">
                  <p>
                    Want to move abroad with a job that aligns with your
                    expectations? We strategize your job search with our global
                    experience and help you build a profile that attracts the
                    attention of your target recruiters abroad.
                  </p>
                </div>
                <div class="col">
                  <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    href="/jobsupport"
                    role="button"
                  >
                    Try it Yourself
                  </a>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div> */}
      <div class="container">
        <div class="h2 fw-bold d-flex justify-content-center py-4">
          Popular Programs
        </div>
        <Tabs color="teal" defaultValue="first" variant="pills">
          <Tabs.List justify="center" >
            <Tabs.Tab value="first">
              <Text size="md" fw={600}>Study</Text></Tabs.Tab>
            <Tabs.Tab value="second">
              <Text size="md" fw={600}>Teach</Text></Tabs.Tab>
            <Tabs.Tab value="third">
              <Text size="md" fw={600}>Internship</Text></Tabs.Tab>
            <Tabs.Tab value="forth">
              <Text size="md" fw={600}>Full Time</Text></Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="first" pt="md">
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
            >
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="sm" className={classes.card2}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card2}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card2}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card2}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
            </Carousel>
          </Tabs.Panel>
          <Tabs.Panel value="second" pt="md">
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
            >
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="sm" className={classes.card1}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card1}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card1}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card1}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
            </Carousel>
          </Tabs.Panel>
          <Tabs.Panel value="third" pt="md">
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
            >
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="sm" className={classes.card3}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card3}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card3}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card3}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
            </Carousel>
          </Tabs.Panel>
          <Tabs.Panel value="forth" pt="md">
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
            >
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card4}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card4}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card4}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
                </Paper>
              </Carousel.Slide>
              <Carousel.Slide>
                <Paper shadow="md" p="xl" radius="md" className={classes.card4}>
                  <div>
                    <Text className={classes.category} size="xs">
                      nature
                    </Text>
                    <Title order={3} className={classes.title}>
                      Best forests to visit in North America
                    </Title>
                  </div>
                  <Button class="btn text-light fw-bold">Read article</Button>
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
