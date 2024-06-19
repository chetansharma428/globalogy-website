import React from "react";

import dp from "../../assests/images/waitoneday-672.jpg";
import vogue from "../../assests/images/vogue.png";
import insider from "../../assests/images/insider.png";
import roll from "../../assests/images/rolling_stone.png";
import telegraph from "../../assests/images/telegraph.png";
import { color } from "framer-motion";
const Founder = () => {
  return (
    <div>
      <div class="row d-flex justify-content-center align-items-center g-2 gap-2 ">
        <div class="col col-xsm-12 d-flex flex-column about">
          <div class="row justify-content-center align-items-center g-2 flex-column gap-4">
            <div class="col">
              <div class="h1 head-txt fw-bold">
                Hi, this is <span class="" style={{color:"#237B54"}} >NIDHI NAGORI!</span> 
              </div>
            </div>
            {/* <div class="col">
                    <div class="h5 qualification p-2 text-center">
                      CA, CPA, CISA, Digital Creator & Career Coach
                    </div>
                  </div> */}
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
                  <img src={insider} class="img-fluid rounded-top" alt="" />
                </div>
                <div class="col">
                  <img src={telegraph} class="img-fluid rounded-top" alt="" />
                </div>
              </div>
            </div>
            <div class="col">
              <div class="h5">
                As a Chartered Accountant, Content Creator, and Career Coach, I
                have had the privilege of inspiring over 1M+ people to pursue
                global careers. My journey has taken me to over 27 countries
                across 5 continents, where I have identified significant gaps in
                the labour markets and a high demand for foreign workers
                worldwide. As an immigrant myself, I have faced the challenges
                of under-confidence as a newcomer, communication skill gaps, and
                complex migration rules. These experiences have fueled my
                passion to help others navigate similar obstacles. Recognizing
                the persistent need for skilled employees and the strong desire
                among my audience to move abroad, I founded Globalogy. Globalogy
                is dedicated to bridging the gap between skilled professionals
                and global opportunities, empowering individuals to achieve
                their dreams of working abroad.
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
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Founder;
