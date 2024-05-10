import React from "react";
import { Carousel } from "@mantine/carousel";
import { Tilt } from "react-tilt";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

import suit from "../assests/images/suit.svg";
import rocket from "../assests/images/rocket.svg";
import badge from "../assests/images/badge.svg";
import arrow from "../assests/images/arrow.svg";
import billboard from "../assests/images/banner.jpg";
import dbox from "../assests/images/3dbox.svg";

const Featuressection = () => {
  // const defaultOptions = {
  //   reverse: false, // reverse the tilt direction
  //   max: 25, // max tilt rotation (degrees)
  //   perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  //   scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  //   speed: 1000, // Speed of the enter/exit transition
  //   transition: true, // Set a transition on enter/exit.
  //   axis: null, // What axis should be disabled. Can be X or Y.
  //   reset: true, // If the tilt effect has to be reset on exit.
  //   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  // };
  return (
    <div class="container-fluid p-4">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 d-flex justify-content-center align-item-center ">
            <div class="h2 fw-bold py-4 d-flex justify-content-center align-item-center">Featured Products</div>
          </div>
          <div class="col-sm-12">
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
            >
              <Carousel.Slide>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                    <Image
                      src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb62b128252df1fdab2e0a_-times-square-5-efe6a1a378ab406245c45704d8cf9eaf.png"
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
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
                      mt="md"
                      radius="md"
                      class="btn text-light fw-bold"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </Carousel.Slide>
              <Carousel.Slide>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                    <Image
                      src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/6603db39b4acd36d57400f3e_Australia%20Mssterclass.png"
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text class="h5 fw-bold">Australia Masterclass</Text>
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
                      mt="md"
                      radius="md"
                      class="btn text-light fw-bold"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </Carousel.Slide>
              <Carousel.Slide>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                    <Image
                      src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb851dd4f6301b864d6ed6_-62cbd7020cf2f2bdf82782ad_scaled_cover-819536fbcc6138a42265c42f36203353.jpg"
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text class="h5 fw-bold">The Ireland Masterclass</Text>
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
                      mt="md"
                      radius="md"
                      class="btn text-light fw-bold"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </Carousel.Slide>
              <Carousel.Slide>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                    <Image
                      src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/65d3272b71e9fd3b54a7b253_-whatsapp-image-2024-02-09-at-18-230437b343d0e41d2193212e7fd8cc5a.jpg"
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" mb="xs">
                    <Text class="h5 fw-bold">
                      Luxembourg & France Masterclass
                    </Text>
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
                      mt="md"
                      radius="md"
                      class="btn text-light fw-bold"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>
        {/* <div class="h2 fw-bold mb-4 text-center">Featured Product</div>
        <div class="row justify-content-center align-items-center gap-2 mb-2">
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="https://mantine.dev/">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb62b128252df1fdab2e0a_-times-square-5-efe6a1a378ab406245c45704d8cf9eaf.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Netherlands Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
                <Button
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  class="btn text-light fw-bold"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="https://mantine.dev/">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/6603db39b4acd36d57400f3e_Australia%20Mssterclass.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Australia Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
                <Button
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  class="btn text-light fw-bold"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <div class="row justify-content-center align-items-center gap-2 mb-2">
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="https://mantine.dev/">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb851dd4f6301b864d6ed6_-62cbd7020cf2f2bdf82782ad_scaled_cover-819536fbcc6138a42265c42f36203353.jpg"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">The Ireland Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
                <Button
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  class="btn text-light fw-bold"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="https://mantine.dev/">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/65d3272b71e9fd3b54a7b253_-whatsapp-image-2024-02-09-at-18-230437b343d0e41d2193212e7fd8cc5a.jpg"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Luxembourg & France Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">
                  Newly added
                </Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
                <Button
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  class="btn text-light fw-bold"
                >
                  Get Started
                </Button>
              </div>
            </Card>
          </div>
        </div> */}
        {/* <div class="row justify-content-center align-items-center gap-2 mb-2">
        <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="https://mantine.dev/">
              <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb62b128252df1fdab2e0a_-times-square-5-efe6a1a378ab406245c45704d8cf9eaf.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Australia Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">Newly added</Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
              <Button color="blue" fullWidth mt="md" radius="md" class="btn text-light fw-bold">
                Get Started
              </Button>
              </div>
            </Card>
          </div>
          <div class="col-lg-5 col-sm-12">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section component="a" href="https://mantine.dev/">
                <Image
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/6603db39b4acd36d57400f3e_Australia%20Mssterclass.png"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text class="h5 fw-bold">Australia Masterclass</Text>
                <Badge class="badge animate__animated animate__tada animate__infinite	infinite">Newly added</Badge>
              </Group>

              <Text size="sm">
                A comprehensive 2-hour Masterclass on Australia covering
                Immigration, Visa Sponsorship, Job Applications, Lifestyle, and
                more!
              </Text>
              <div>
              <Button color="blue" fullWidth mt="md" radius="md" class="btn text-light fw-bold">
                Get Started
              </Button>
              </div>
            </Card>
          </div>
        </div> */}
      </div>
      {/* <div class="row d-flex flex-wrap align-items-center g-2 gap-4 py-4">
        <div class="col-lg-6 col-sm-12 position-relative">
          <div class="corner-content top-left ">
            <img src={rocket} class="img-fluid" alt="" />
          </div>
          <Tilt options={defaultOptions}>
            <div class="mid row justify-content-center align-items-center g-2 d-flex flex-column gap-2">
              <div class="col">
                <div class="row justify-content-center align-items-center g-2 d-flex flex-column border-bottom">
                  <div class="col icon">
                    <img src={suit} class="img-fluid p-2" alt="" />
                  </div>
                  <div class="col">
                    <div class="h5">Apply: Build, Play, Create</div>
                  </div>
                  <div class="col fw-bold text-muted">
                    <div class="h6 sub-text">
                      Bring ideas to life in CodeHelp's Apply. Build projects,
                      play in boot playgrounds—all in your browser.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row justify-content-center align-items-center g-2 d-flex flex-column">
                  <div class="col icon">
                    <img src={rocket} class="img-fluid filter-green" alt="" />
                  </div>
                  <div class="col">
                    <div class="h5">Grow: Elevate Your Career</div>
                  </div>
                  <div class="col fw-bold text-muted">
                    <div class="h6 sub-text">
                      Climb with Globalogy’s mentorship and achieve career
                      success.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row justify-content-center align-items-center g-2 d-flex flex-column">
                  <div class="col">
                    <div class="h5 fw-normal text-danger">Why We're Your</div>
                  </div>
                  <div class="col">
                    <div class="h4">Best Global Carrier Learning Choice?</div>
                  </div>
                  <div class="col fw-bold text-muted">
                    <div class="h6 sub-text">
                      Choose Globalogy for an seemless Experience.
                    </div>
                  </div>
                  <div class="col">
                    <a
                      name=""
                      id=""
                      class="btn btn-primary"
                      href="#"
                      role="button"
                    >
                      Let's Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
        <div class="col position-relative">
          <div class="corner-content top-right ">
            <img src={arrow} class="img-fluid" alt="" />
          </div>
          <Tilt options={defaultOptions}>
          <div class="mid row justify-content-center align-items-center g-2 d-flex flex-column gap-4">
            <div class="col">
              <div class="row justify-content-center align-items-center g-2 d-flex flex-column ">
                <div class="col icon">
                  <img src={badge} class="img-fluid " alt="" />
                </div>
                <div class="col">
                  <div class="h5">Community Learning Experience</div>
                </div>
                <div class="col fw-bold text-muted">
                  <div class="h6 sub-text">
                    Emphasize that you connect with very advanced likely minded
                    people to ensure high-quality, up-to-date content.
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row justify-content-center align-items-center g-2 d-flex flex-column">
                <div class="col">
                  <div class="h5 text-danger">Who are We</div>
                </div>
                <div class="col">
                  <div class="h4">Empowering People, Enabling Dreams</div>
                </div>
                <div class="col fw-bold text-muted">
                  <div class="h6 sub-text">
                    Unveil the essence of Globalogy: a community-driven platform
                    dedicated to empowering people of all levels. Discover who
                    we are and how we're shaping the future of abroad journey.
                  </div>
                </div>
                <div class="col">
                  <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    href="#"
                    role="button"
                  >
                    Let's Connect
                  </a>
                </div>
              </div>
            </div>
          </div>
          </Tilt>
        </div>
      </div>
      <div class="row d-flex justify-content-center align-items-center py-4 d-flex flex-column gap-4">
        <div class="col-8 justify-content-center align-items-center">
          <h1 class="h2 text-center">
            First Ed-tech Start-Up to feature in the Time Square, New York
          </h1>
        </div>
        <div class="col position-relative">
          <div class="banner d-flex justify-content-center align-items-center">
            <div class="corner-content top-left glow">
              <img src={dbox} class="img-fluid" alt="" />
            </div>
            <img src={billboard} alt="" class="img-fluid rounded" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Featuressection;
