import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createTheme, MantineProvider } from "@mantine/core";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
} from "react-router-dom";
import "@mantine/core/styles.css";
import "animate.css";

import "./index.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/ui/Navbar";
import Facingissue from "./components/ui/Facingissue";
import Contact from "./components/ui/Contact";
import Aboutus from "./components/Aboutus";
import Jobsupport from "./components/Jobsupport";
import Courses from "./components/Courses";
import Visasupport from "./components/Visasupport";

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <Aboutus />,
  },
  {
    path: "/jobsupport",
    element: <Jobsupport />,
  },
  {
    path: "/visasupport",
    element: <Visasupport />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider theme={theme}>
    <NextUIProvider>
      <React.StrictMode>
          <Navbar />
        <RouterProvider router={router} />
        <Facingissue />
      </React.StrictMode>
    </NextUIProvider>
  </MantineProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
