import React from "react";
import dp from "../../assests/images/about-banner.png";

const About = () => {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2 flex-column py-4">
          <div class="col">
            <div class="h2 fw-bold">About</div>
          </div>
          <div class="col">
            <div class="row d-flex justify-content-center align-items-center g-2 gap-4">
              <div class="col-lg-6 col-xsm-12">
                <div class="row justify-content-center align-items-center g-2 flex-column gap-2">
                  <div class="col">
                    <div class="h1 head-txt fw-bold text-center">
                      Nidhi Nagori
                    </div>
                  </div>
                  <div class="col">
                    <div class="h5 qualification p-2 text-center">
                      CA, CPA, CISA, DIGITAL CREATOR AND CAREER COACH
                    </div>
                  </div>

                  <div class="col">
                    <div class="h5">
                      Our founder, Nidhi Nagori is a CA and a content creator
                      who inspires an audience of over 1 million people to seek
                      a global career. Having worked in more than 27 countries
                      in 5 continents, Nidhi realized the gap in labor markets
                      and the need for foreign workers in the global world. As
                      an immigrant, she has seen it all the under-confidence of
                      a newcomer, the gap in communication skills, and the
                      complex migration rules. But she knew the need for
                      employees existed and the desire to move abroad flickered
                      in the hearts of her audience. That is how Globalogy was
                      born.
                    </div>
                  </div>
                </div>
              </div>
              <div class="col justify-content-center d-flex">
                <img src={dp} class="img-fluid text-center" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;