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
  Anchor,
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
import cx from "clsx";

const mockdata = [
  {
    icon: IconNotification,
    title: "Visa Support Service",
    description: "Our Visa Support Service",
  },
  {
    icon: IconChartPie3,
    title: "Job Support Service",
    description: "Our Job Support Service",
  },
  {
    icon: IconBook,
    title: "Courses",
    description: "Our Top Courses",
  },
];

const Navbar = () => {
  // const [isDarkMode, setIsDarkMode] = React.useState(() => false);
  // return (
  //   <div class="sticky-top header-bar">
  //     <div
  //       class="alert alert-dismissible fade show m-0 border-0 text-center text-light"
  //       role="alert"
  //     >
  //       <strong>Off-to Australia!</strong> You should check new Masterclass
  //       <button class="check btn btn-dark fw-bold"> Check-it-out</button>
  //       <button
  //         type="button"
  //         class="btn-close"
  //         data-bs-dismiss="alert"
  //         aria-label="Close"
  //       >
  //         X
  //       </button>
  //     </div>
  //     <div class="container-fluid p-0">
  //       <nav class="navbar navbar-expand-lg navbar-light shadow">
  //         <div class="container">
  //           <a class="navbar-brand d-flex align-items-center" href="#">
  //             <img
  //               src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64885d09846b08b720f88dc8_123.png"
  //               width="48"
  //               height="48"
  //               class="d-inline-block align-top"
  //               alt="Globalogy Logo"
  //             />
  //             <p class="text-uppercase font-semibold text-2xl mb-0">
  //               Globalogy
  //             </p>
  //           </a>
  //           <button
  //             class="navbar-toggler collapsed"
  //             type="button"
  //             data-bs-toggle="collapse"
  //             data-bs-target="#navbarSupportedContent"
  //             aria-controls="navbarSupportedContent"
  //             aria-expanded="false"
  //             aria-label="Toggle navigation"
  //           >
  //             <span class="navbar-toggler-icon"></span>
  //           </button>
  //           <div
  //             class="collapse navbar-collapse justify-content-evenly"
  //             id="navbarSupportedContent"
  //           >
  //             <ul class="navbar-nav">
  //               <li class="nav-item px-2 ">
  //                 <a class="nav-link" href="/">
  //                   Home
  //                 </a>
  //               </li>
  //               <li class="nav-item px-2">
  //                 <a class="nav-link" href="/#courses">
  //                   Testimonials
  //                 </a>
  //               </li>
  //               <li class="nav-item dropdown">
  //                 <a
  //                   class="nav-link  dropdown-toggle"
  //                   href="#"
  //                   data-bs-toggle="dropdown"
  //                 >
  //                   {" "}
  //                   Sevices{" "}
  //                 </a>
  //                 <ul class="dropdown-menu">
  //                   <li>
  //                     <a class="dropdown-item" href="#">
  //                       {" "}
  //                       Job Support Sevices{" "}
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a class="dropdown-item" href="#">
  //                       {" "}
  //                       Visa Support Sevices{" "}
  //                     </a>
  //                   </li>
  //                   <li>
  //                     <a class="dropdown-item" href="#">
  //                       {" "}
  //                       Courses{" "}
  //                     </a>
  //                   </li>
  //                 </ul>
  //               </li>
  //               <li class="nav-item px-2">
  //                 <a class="nav-link" href="/contact">
  //                   Blog
  //                 </a>
  //               </li>
  //               <li class="nav-item px-2">
  //                 <a class="nav-link" href="/articles">
  //                   Contact
  //                 </a>
  //               </li>
  //             </ul>
  //             <div class="d-flex ms-lg-2">
  //               <button class="sign-in btn">Sign Up</button>
  //             </div>
  //             <DarkModeToggle
  //             onChange={setIsDarkMode}
  //             checked={isDarkMode}
  //             size={80}
  //           />
  //           </div>
  //         </div>
  //       </nav>
  //     </div>
  //   </div>
  // );

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
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
    </UnstyledButton>
  ));

  return (
    <Box class="head-bar sticky-top">
      <div
        class="alert alert-dismissible fade show m-0 border-0 text-center text-light"
        role="alert"
      > 
        <strong>Off-to Australia!</strong> You should check new Masterclass <span class="px-1"><button class="check btn btn-dark fw-bold"> Check-it-out</button></span>
        
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
              />
              <p class="text-uppercase fw-bold text-2xl mb-0">Globalogy</p>
            </div>
            <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link}>
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
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
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
              <a href="#" className={classes.link}>
                Blog
              </a>
              <a href="#" className={classes.link}>
                Contact
              </a>
            </Group>
            <Group visibleFrom="sm">
              <Button class="btn text-light">Log in</Button>
              <Button color="cyan">Sign up</Button>
              <ActionIcon
                onClick={() =>
                  setColorScheme(
                    computedColorScheme === "light" ? "dark" : "light"
                  )
                }
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
                style={{ backgroundColor: "transparent", padding: "8px"}}
                class="mid mode-btn"
              >
                <IconSun
                  class="light"
                  stroke={1.5}
                />
                <IconMoon
                  class="dark"
                  stroke={1.5}
                />
              </ActionIcon>
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

            <a href="#" className={classes.link}>
              Home
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" class="px-3">
                  Sevices
                </Box>
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
            <a href="#" className={classes.link}>
              Blog
            </a>
            <a href="#" className={classes.link}>
              Contact
            </a>
            <Divider my="sm" />
            <Group justify="center" grow pb="xl" px="md">
              <Button class="btn log-in">Log in</Button>
              <Button color="cyan">Sign up</Button>
              <ActionIcon
                onClick={() =>
                  setColorScheme(
                    computedColorScheme === "light" ? "dark" : "light"
                  )
                }
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
                style={{ backgroundColor: "transparent", padding: "8px"}}
                class="mid mode-btn"
              >
                <IconSun
                  className={cx(classes.icon, classes.light)}
                  stroke={1.5}
                />
                <IconMoon
                  className={cx(classes.icon, classes.dark)}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
