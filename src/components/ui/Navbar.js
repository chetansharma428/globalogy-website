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
  IconSun,
  IconMoon,
} from "@tabler/icons-react";

const mockdata = [
  {
    icon: IconNotification,
    title: "Visa Support Service",
    description: "Our Visa Support Service",
    link: "/visasupport",
  },
  {
    icon: IconChartPie3,
    title: "Job Support Service",
    description: "Our Job Support Service",
    link: "/jobsupport",
  },
  {
    icon: IconBook,
    title: "Courses",
    description: "Our Top Courses",
    link: "/courses",
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
  // const navLinkEls = document.querySelectorAll('.Navbar_link__jz8zd');
  // const windowPathname = window.location.pathname;
  // console.log(navLinkEls);

  // navLinkEls.forEach((navLinkEl) => {
  //   const navLinkpathname = new URL(navLinkEl.href).pathname;
  //   if (!navLinkEl.classList.contains(navLinkpathname)) {
  //     // If it doesn't contain the class, add it
  //     console.log("findout");
  //   }

  //   // console.log('Window Pathname:', windowPathname);
  //   // console.log('Navlink Pathname:', navLinkpathname);
  //   // if((windowPathname === navLinkpathname) || (windowPathname === '/index.html' && navLinkpathname === '/')){
  //   //   navLinkEl.classList.add('active');
  //   //   console.log('Active class added');
  //   // }
  // });

  return (
    <Box class="head-bar sticky-top">
      <div
        class="alert alert-dismissible fade show m-0 border-0 text-center text-light"
        role="alert"
      >
        <strong>Off-to Australia!</strong> You should check new Masterclass{" "}
        <span class="px-1">
          <button class="check btn btn-dark fw-bold"> Check-it-out</button>
        </span>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          X
        </button>
      </div>
      <Box class="mid rounded-0 navbar-back" p={20} fz="xl">
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <div class="d-flex flex-row justify-content-center align-items-center">
              <img
                src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64885d09846b08b720f88dc8_123.png"
                width="48"
                height="48"
                class="d-inline-block align-top"
                alt="Globalogy Logo"
                href="/"
              />
              <a class="text-uppercase fw-bold text-2xl mb-0" href="/">Globalogy</a>
            </div>
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="/" className={classes.link}>
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
                    {/* <Anchor href="#" fz="xs">
                      View all
                    </Anchor> */}
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link}>
                Testimonials
              </a>
              <a href="https://globalogy.in/blog/" className={classes.link}>
                Blog
              </a>
              <a href="/contact" className={classes.link}>
                Contact
              </a>
            </Group>
            <Group visibleFrom="sm">
              {/* <Button
                class="btn text-light"
                href="https://app.globalogy.in/web/login"
              >
                Log in
              </Button> */}
              <Button
                class="btn text-light"
                href="https://app.globalogy.in/web/login"
              >
                Sign up
              </Button>
              <Group justify="center">
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
              </Group>
            </Group>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </header>
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Globalogy"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

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
            <a href="#" className={classes.link}>
              Testimonials
            </a>
            <a href="https://globalogy.in/blog/" className={classes.link}>
              Blog
            </a>
            <a href="/contact">
              <button className={classes.link}>Contact</button>
            </a>
            <Divider my="sm" />
            <Group justify="center" grow pb="xl" px="md">
              {/* <Button
                class="btn log-in"
                href="https://app.globalogy.in/web/login"
              >
                Log in
              </Button> */}
              <Button
                class="btn text-light"
                href="https://app.globalogy.in/web/login"
              >
                Sign up
              </Button>
              <Group justify="center">
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
              </Group>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
