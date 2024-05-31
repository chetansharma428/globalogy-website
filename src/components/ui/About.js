import React from "react";

import dp from "../../assests/images/Nidhi.jpeg.jpg";
import vogue from "../../assests/images/vogue.png";
import insider from "../../assests/images/insider.png";
import roll from "../../assests/images/rolling_stone.png";
import telegraph from "../../assests/images/telegraph.png";

const About = () => {
  return (
    <div class="container-fluid bg-light py-4">
      <div class="container">
        <div class="row justify-content-center align-items-center g-2 flex-column py-4">
          <div class="col">
            <div class="h2 fw-bold text-center text-dark">
              About the Founder
            </div>
          </div>
          <div class="col">
            <div class="row d-flex justify-content-center align-items-center g-2 gap-2 ">
              <div class="col col-xsm-12 d-flex flex-column about">
                <div class="row justify-content-center align-items-center g-2 flex-column gap-2">
                  <div class="col">
                    <div class="h1 head-txt fw-bold text-center">
                      Nidhi Nagori
                    </div>
                  </div>
                  <div class="col">
                    <div class="h5 qualification p-2 text-center">
                      CA, CPA, CISA, Digital Creator & Career Coach
                    </div>
                  </div>
                  <div class="col">
                    <div class="col h3">Featured in:</div>
                    <div class="row justify-content-center align-items-center gap-2">
                      <div class="col">
                        <img src={roll} class="img-fluid rounded-top" alt="" />
                      </div>
                      <div class="col">
                        <img src={vogue} class="img-fluid rounded-top" alt="" />
                      </div>
                      <div class="col">
                        <img
                          src={insider}
                          class="img-fluid rounded-top"
                          alt=""
                        />
                      </div>
                      <div class="col">
                        <img
                          src={telegraph}
                          class="img-fluid rounded-top"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div class="h6">
                      Our founder, Nidhi Nagori is a Chartered Accountant and a
                      Content Creator who inspires over 1 Million people to
                      pursue global careers. With an experience of working in
                      more than 27 Countries across 5 Continents, Nidhi
                      identified significant gaps in the labour markets and the
                      high demand for foreign workers worldwide. As an immigrant
                      herself, she has faced the challenges of under-confidence
                      as a newcomer, communication skill gaps, and complex
                      migration rules. However, she recognized the persistent
                      need for skilled employees and the strong desire among her
                      audience to move abroad. This led to the creation of
                      Globalogy.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-xsm-12 d-flex justify-content-center about-section">
                <a href="https://www.linkedin.com/in/nidhinagori29/?originalSubdomain=ca">
                  <img
                    src={dp}
                    class="rounded"
                    alt="nidhi nagori"
                    style={{ height: "580px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
