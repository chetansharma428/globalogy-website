import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "@mantine/core/styles.css";
import "animate.css";
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';

import "./index.css";
import Homepage from "./components/Homepage";
import Contact from "./components/ui/Contact";
import Aboutus from "./components/Aboutus";
import Jobsupport from "./components/Jobsupport";
import Courses from "./components/Courses";
import Visasupport from "./components/Visasupport";
import Footer from "./components/ui/Footer";
import '@mantine/carousel/styles.css';
import Campusambasador from "./components/Campusambasador";
import Cometocanada from "./components/Cometocanada";
import Directjobplacement from "./components/Directjobplacement";
import Dubai from "./components/Masterclasses/dubai";
import Australia from "./components/Masterclasses/Australia";
import Canada from "./components/Masterclasses/Canada";
import CanadaWork from "./components/Masterclasses/CanadaWork";
import Chancenkarte from "./components/Masterclasses/Chancenkarte";
import GlobalMasterclass from "./components/Masterclasses/GlobalMasterclass";
import Ireland from "./components/Masterclasses/Ireland";
import Linkedin_one from "./components/Masterclasses/Linkedin_one";
import Linkedin_two from "./components/Masterclasses/Linkedin_two";
import Luxembourg from "./components/Masterclasses/luxembourg";
import Netherlands from "./components/Masterclasses/Netherlands";
import Profilebuilding from "./components/Masterclasses/Profilebuilding";
import Uk from "./components/Masterclasses/uk";


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
  {
    path: "/campusambasador",
    element: <Campusambasador />,
  },
  {
    path: "/cometocanada",
    element: <Cometocanada />,
  },
  {
    path: "/directjobplacement",
    element: <Directjobplacement />,
  },
  //Masterclass paths
  {
    path: "/dubaimasterclass",
    element: <Dubai />,
  },
  {
    path: "/australiamasterclass",
    element: <Australia />,
  },
  {
    path: "/canadamasterclass",
    element: <Canada />,
  },
  {
    path: "/canadaworkmasterclass",
    element: <CanadaWork />,
  },
  {
    path: "/chancenkartmasterclass",
    element: <Chancenkarte />,
  },
  {
    path: "/globalmasterclass",
    element: <GlobalMasterclass />,
  },
  {
    path: "/irelandmasterclass",
    element: <Ireland />,
  },
  {
    path: "/linkedinonemasterclass",
    element: <Linkedin_one />,
  },
  {
    path: "/linkedintwomasterclass",
    element: <Linkedin_two />,
  },
  {
    path: "/luxembourgmasterclass",
    element: <Luxembourg />,
  },
  {
    path: "/netherlandsmasterclass",
    element: <Netherlands />,
  },
  {
    path: "/profilebuildingmasterclass",
    element: <Profilebuilding />,
  },
  {
    path: "/ukmasterclass",
    element: <Uk />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider>
    <Notifications position="top-right" zIndex={100000}/>
      <React.StrictMode>
        <RouterProvider router={router} />
        {/* <Facingissue /> */}
        <Footer/>
      </React.StrictMode>
  </MantineProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
