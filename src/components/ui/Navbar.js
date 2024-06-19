import React from "react";
import classes from "./Navbar.module.css";

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconBook,
  IconChartPie3,
  IconChevronDown,
} from "@tabler/icons-react";

const mockdata = [
  {
    icon: IconChartPie3,
    title: "Job Support Service (JSS)",
    description: "White Collar Jobs",
    link: "/jobsupport",
  },
  {
    icon: IconNotification,
    title: "Job Seeker Visa & PR (JSV & PR)",
    description: "JSV-Austria, UAE, Germany, Sweden, Portugal || PR-Australia & Canada",
    link: "/visasupport",
  },
  {
    icon:  IconBook,
    title: "Come To Canada (C2C)",
    description: "George Brown College-Study Program",
    link: "/cometocanada",
  },
  {
    icon: IconChevronDown,
    title: "Direct Job Placement (DJP)",
    description: "Blue Collar Jobs",
    link: "/directjobplacement",
  },
];

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink}>
      <a href={item.link}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.blue[6]}
            />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </a>
    </UnstyledButton>
  ));

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
      {/* Navbar section */}
      <Box class="head-bar">
        <Box class="rounded-0 navbar-back" p={20} fz="lg">
          <header className={classes.header}>
            <Group justify="space-between" h="100%">
              <div class="d-flex flex-row justify-content-center align-items-center logotext">
                <img
                  src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64885d09846b08b720f88dc8_123.png"
                  width="48"
                  height="48"
                  class="d-inline-block align-top"
                  alt="Globalogy Logo"
                  href="/"
                />
                <a
                  class="mb-0 h2 text-light "
                  style={{ fontFamily: "Pacifico, cursive" }}
                  href="/"
                >
                  Globalogy
                </a>
              </div>
              <Group h="100%" gap={0} visibleFrom="md">
                <a href="/" className={classes.link} id="navEle">
                  Home
                </a>

                <HoverCard
                  width={600}
                  position="bottom"
                  radius="md"
                  shadow="md"
                  withinPortal
                >
                  <HoverCard.Target>
                    <a href="#" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Services
                        </Box>
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                          color={theme.colors.blue[6]}
                        />
                      </Center>
                    </a>
                  </HoverCard.Target>
                  <HoverCard.Dropdown
                    style={{ overflow: "hidden", zIndex: "99999" }}
                  >
                    <Group justify="space-between" px="md">
                      <Text fw={400}>Services</Text>
                    </Group>

                    <Divider my="sm" />

                    <SimpleGrid cols={2} spacing={0}>
                      {links}
                    </SimpleGrid>
                  </HoverCard.Dropdown>
                </HoverCard>
                <a
                  href="/courses"
                  className={classes.link}
                  id="navEle"
                >
                  Masterclass
                </a>
                {/* <div id="navEle">
                  <button
                    className={classes.link}
                    onClick={() => {
                      const element = document.getElementById("testimonialID");
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        color:"white"
                      });
                      const navLinkEls = document.getElementById("navEle");
                      navLinkEls.style.color = "blue";
                    }}
                  >
                    Testimonials
                  </button>
                </div> */}
                <a
                  href="https://globalogy.in/blog/"
                  className={classes.link}
                  id="navEle"
                >
                  Blog
                </a>
                <a href="/contact" className={classes.link} id="navEle">
                  About
                </a>
              </Group>

              <Group visibleFrom="sm">
                <a
                  class="button-g btn fw-bold"
                  href="https://app.globalogy.in/web/login"
                >
                  Sign up
                </a>
                {/* <Group justify="center">
                <ActionIcon
                  onClick={() => {
                    setColorScheme(
                      computedColorScheme === "light" ? "dark" : "light"
                    );
                    document.documentElement.classList.toggle("dark-mode");
                  }}
                  variant="default"
                  size="xl"
                  aria-label="Toggle color scheme"
                  style={{
                    backgroundColor: "transparent",
                    padding: "5px",
                    border: "2px solid #00A5CF",
                  }}
                  class="mid mode-btn"
                >
                  <span class="moon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                    </svg>
                  </span>
                  <span class="sun">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="#ffd43b">
                        <circle r="5" cy="12" cx="12"></circle>
                        <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                      </g>
                    </svg>
                  </span>
                  <span class="slider"></span>
                </ActionIcon>
              </Group> */}
              </Group>
              <Burger
                opened={drawerOpened}
                onClick={toggleDrawer}
                hiddenFrom="md"
                color="#00ff89"
              />
            </Group>
          </header>
          {/* mobile section of Navbar */}
          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            position="top"
            size="50%"
            padding="md"
            title="Globalogy"
            hiddenFrom="md"
            zIndex={1000000}
            overlayProps={{ backgroundOpacity: 0.5, blur: 4, color: "white" }}
          >
            <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
              <Divider my="md" />
              <a href="/" className={classes.link}>
                Home
              </a>
              <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                  <Box component="span">Sevices</Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpened}>{links}</Collapse>
              <a
                  href="/contact"
                  className={classes.link}
                  id="navEle"
                >
                  Masterclass
                </a>
              {/* <div>
                <button
                  className={classes.link}
                  onClick={() => {
                    const element = document.getElementById("testimonialID");
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  Testimonials
                </button>
              </div> */}
              <a href="https://globalogy.in/blog/" className={classes.link}>
                Blog
              </a>
              <a href="/about">
                <button className={classes.link}>About</button>
              </a>
              <Divider my="sm" />
              <Group justify="center" grow pb="xl" px="md">
                <div class="d-flex">
                  <Button
                    class="btn button-g text-light px-4"
                    href="https://app.globalogy.in/web/login"
                  >
                    Sign up
                  </Button>
                </div>
                {/* Dark mode toggle button */}
                {/* <Group justify="center">
                <ActionIcon
                  onClick={() => {
                    setColorScheme(
                      computedColorScheme === "light" ? "dark" : "light"
                    );
                    document.documentElement.classList.toggle("dark-mode");
                  }}
                  variant="default"
                  size="xl"
                  aria-label="Toggle color scheme"
                  style={{ backgroundColor: "transparent", padding: "5px" }}
                  class="mid mode-btn"
                >
                  <span class="moon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                    </svg>
                  </span>
                  <span class="sun">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="#ffd43b">
                        <circle r="5" cy="12" cx="12"></circle>
                        <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                      </g>
                    </svg>
                  </span>
                  <span class="slider"></span>
                </ActionIcon>
              </Group> */}
              </Group>
            </ScrollArea>
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
