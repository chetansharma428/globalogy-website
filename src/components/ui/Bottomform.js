import React from "react";

import suit from "../../assests/images/suit.svg";
import rocket from "../../assests/images/rocket.svg";
import badge from "../../assests/images/badge.svg";
import g_icon from "../../assests/images/G-icon.png";
import m_icon from "../../assests/images/mail-icon.png";

const Bottomform = () => {
  return (
    <div>
      <div class="container-fluid bg-light">
        <div class="container">
          <div class="row d-flex justify-content-center align-items-center g-2 p-4">
            <div class="col-lg-6 col-sm-12">
              <div class="mid row justify-content-center align-items-center g-2 flex-column gap-4" style={{padding: "4rem"}}>
                <div class="col">
                  <div class="row justify-content-center align-items-center g-2 flex-column border-bottom">
                    <div class="col d-flex justify-content-start align-items-center ">
                      <div class="icon-frm p-2">
                        <img src={badge} class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col">
                      <div class="h5" style={{ color: "#7B8FD9" }}>
                        Learn: Access 20+ Courses
                      </div>
                    </div>
                    <div class="col text-muted">
                      <p>
                        Unlock knowledge with Globalogy’s Learn. Dive into{" "}
                        <span class="fw-bold">20+ courses</span> led by best.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="row justify-content-center align-items-center g-2 flex-column border-bottom">
                    <div class="col d-flex justify-content-start align-items-center">
                      <div class="icon-suit p-2">
                        <img src={suit} class="img-fluid" alt="" />
                      </div>
                    </div>
                    <div class="col">
                      <div class="h5" style={{ color: "#EF476F" }}>
                        Apply: Build, Communicate, Connect
                      </div>
                    </div>
                    <div class="col text-muted">
                      <p>
                        Bring ideas to life in Globalogy’s{" "}
                        <span class="fw-bold">Build, Communicate, Connect</span>{" "}
                        through Our vast Community.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="row justify-content-center align-items-center g-2 flex-column border-bottom">
                    <div class="col d-flex justify-content-start align-items-center">
                      <div class="icon-rct p-2">
                        <img src={rocket} class="img-fluid " alt="" />
                      </div>
                    </div>
                    <div class="col">
                      <div class="h5" style={{ color: "#23C45C" }}>
                        Grow: Elevate Your Career
                      </div>
                    </div>
                    <div class="col text-muted">
                      <p>
                        Climb with Globalogy’s Grow. Upskill through courses and
                        achieve career success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row justify-content-center align-items-center g-2 flex-column">
                <div class="col py-2">
                  <div class="row justify-content-center align-items-center g-2 flex-column">
                    <button type="button" class="col d-flex justify-content-center align-items-center gap-2 w-75 btn btn-light">
                      <img src={g_icon} class="img-fluid rounded-top" alt="" />
                      <p class="text-light">Continue With Google</p>
                    </button>
                    <div class="col d-flex justify-content-center align-items-center text-muted">
                        <p>Or register with email</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                <div class="row justify-content-center align-items-center g-2 flex-column">
                    <button type="button" class="col d-flex justify-content-center align-items-center gap-2 w-75 btn">
                      <img src={m_icon} class="img-fluid rounded-top" alt="" />
                      <p class="text-light">Continue With email</p>
                    </button>
                    <div class="col d-flex justify-content-center align-items-center text-primary">
                        <a>Don't have an account?</a>
                    </div>
                  </div>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                    <button type="button" class="btn text-light">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottomform;
