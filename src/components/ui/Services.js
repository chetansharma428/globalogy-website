import React from "react";
import { Tilt } from "react-tilt";
import visasupport from "../../assests/images/visa.png";
import jobsupport from "../../assests/images/job.png";

const Services = () => {
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
    <div>
      <div class="container" style={{padding:"50px 0px"}}>
        <div class="col d-flex justify-content-center align-items-center py-4">
            <div class="h2 fw-bold">
                Our Services
            </div>
        </div>
        <div class="row justify-content-center align-items-center g-2 gap-4">
          <div class=" col-lg-6 col-sm-12">
          <Tilt options={defaultOptions}>
            <div class="mid row d-flex justify-content-center align-items-center flex-column g-2">
              <div class="col logo d-flex justify-content-start align-items-center">
                .<img src={visasupport} class="img-fluid " alt="" />
              </div>
              <div class="col">
                <div class="h6 text-danger">Work Visa Support</div>
              </div>
              <div class="col">
                <p>
                  Want to move abroad without a job? There are countries that
                  allow you to move in with a Job Seeker Visa, Digital Nomad
                  Visa, and Passive Income Visa and live there for a period of
                  time. We help you navigate the complex approval process for
                  these new-age. visas.
                </p>
              </div>
              <div class="col">
                  <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    href="#"
                    role="button"
                  >
                    Try it Yourself
                  </a>
                </div>
            </div>
            </Tilt>
          </div>
          <div class=" col ">
          <Tilt options={defaultOptions}>
            <div class="mid row d-flex justify-content-center align-items-center flex-column g-2">
              <div class="col logo d-flex justify-content-start align-items-center">
                .<img src={jobsupport} class="img-fluid " alt="" />
              </div>
              <div class="col">
                <div class="h6 text-primary">Job Support Service</div>
              </div>
              <div class="col">
                <p>
                Want to move abroad with a job that aligns with your expectations? 
                We strategize your job search with our global experience and help you build a profile that attracts the attention of your target recruiters abroad.
                </p>
              </div>
              <div class="col">
                  <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    href="#"
                    role="button"
                  >
                    Try it Yourself
                  </a>
                </div>
            </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
