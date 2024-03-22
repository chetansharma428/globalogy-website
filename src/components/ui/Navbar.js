import React from 'react'
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => false);
  return (
    <div class="sticky-top">
      <div class="alert alert-dismissible fade show m-0 border-0 text-center text-light" role="alert">
        <strong>Off-to Australia!</strong> You should check new Masterclass
        <button class="check btn btn-dark fw-bold"> Check-it-out</button>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">X</button>
      </div>
      <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
          <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="#">
              <img src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64885d09846b08b720f88dc8_123.png" width="48" height="48" class="d-inline-block align-top" alt="Globalogy Logo" />
              <p class="text-uppercase font-semibold text-2xl mb-0">Globalogy</p>
            </a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
              <ul class="navbar-nav fw-bold">
                <li class="nav-item px-2 ">
                  <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link" href="/#courses">Testimonials</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Sevices </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#"> Job Support Sevices </a></li>
                    <li><a class="dropdown-item" href="#"> Visa Support Sevices </a></li>
                    <li><a class="dropdown-item" href="#"> Courses </a></li>
                  </ul>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link" href="/contact">Blog</a>
                </li>
                <li class="nav-item px-2">
                  <a class="nav-link" href="/articles">Contact</a>
                </li>
              </ul>
              <div class="d-flex ms-lg-2">
                <button class="sign-in btn fw-bold">Sign Up</button>
              </div>
            </div>
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={80}
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar