import React from "react";
import { Tilt } from "react-tilt";

import suit from "../assests/images/suit.svg";
import rocket from "../assests/images/rocket.svg";
import badge from "../assests/images/badge.svg";
import arrow from "../assests/images/arrow.svg";
import billboard from "../assests/images/banner.jpg";
import dbox from "../assests/images/3dbox.svg";

const Featuressection = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div class="container">
      <div class="row d-flex flex-wrap align-items-center g-2 gap-4 py-4">
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
      </div>
    </div>
  );
};

export default Featuressection;
