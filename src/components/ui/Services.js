import React from "react";
import visasupport from "../../assests/images/visa.png";
import jobsupport from "../../assests/images/job.png";

const Services = () => {
  return (
    <div>
      <div class="container">
        <div class="col d-flex justify-content-center align-items-center py-4">
            <div class="h2">
                Our Services
            </div>
        </div>
        <div class="row justify-content-center align-items-center g-2 gap-4">
          <div class="mid col-lg-6 col-sm-12">
            <div class="row d-flex justify-content-center align-items-center flex-column g-2">
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
          </div>
          <div class="mid col ">
            <div class="row d-flex justify-content-center align-items-center flex-column g-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
