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
  Space
} from "@mantine/core";
import classes from "./Navbar.module.css"

const Services = () => {
  return (
    <div class="container-fluid">
      <div class="container text-light py-4">
        {/* <div class="h2 fw-bold d-flex justify-content-center py-4">
          Popular Programs
        </div> */}
        <Tabs color="#237B54" defaultValue="first" variant="pills">
          <Tabs.List justify="center" class="d-flex justify-content-center align-items-center gap-4" >
            <Tabs.Tab value="first">
              <Text size="lg" fw={600}>Masterclass</Text>
              </Tabs.Tab>
            <Tabs.Tab value="second">
              <Text size="lg" fw={600}>Courses</Text></Tabs.Tab>
            <Tabs.Tab value="third">
              <Text size="lg" fw={600}>Blogs</Text></Tabs.Tab>
            {/* <Tabs.Tab value="forth">
              <Text size="lg" fw={600}>Full Time</Text></Tabs.Tab> */}
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
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section component="a" href="https://mantine.dev/">
                    <Image
                      src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64cb62b128252df1fdab2e0a_-times-square-5-efe6a1a378ab406245c45704d8cf9eaf.png"
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group justify="space-between" mt="md" >
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
                      class="btn button-g fw-bold"
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
                      class="btn button-g fw-bold"
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
                      class="btn button-g fw-bold"
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
                      class="btn button-g fw-bold"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
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
