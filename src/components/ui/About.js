import React from "react";
import Founder from "./Founder";

const About = () => {
  return (
    <div class="container-fluid bg-light py-4">
      <div class="container">
        <div class="row justify-content-center align-items-center g-2 flex-column py-4">
          <div class="col">
            {/* <div class="h2 fw-bold text-center text-dark">
            Hi, This is Nidhi Nagori
            </div> */}
          </div>
          <div class="col">
              <Founder/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
