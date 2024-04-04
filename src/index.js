import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "animate.css";
import "./index.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/ui/Navbar";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Facingissue from "./components/ui/Facingissue";

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider theme={theme}>
    <NextUIProvider>
      <React.StrictMode>
        <Navbar />
        <Homepage />
        <Facingissue/>
      </React.StrictMode>
    </NextUIProvider>
  </MantineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
