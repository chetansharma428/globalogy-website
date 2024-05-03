import React from "react";

import yt from "../../assests/images/ytb.png";
import LinkedIn from "../../assests/images/lknd.png";
import telegram from "../../assests/images/tlgr.png";
import discord from "../../assests/images/dscrd.png";
import topArrow from "../../assests/images/angle-arrow.png";

const Social = () => {
  return (
    <div>
      <div class="container-fluid bg-light" style={{padding: "100px 0px"}}>
        <div class="container py-4">
          <div class="row justify-content-center align-items-center g-2 flex-column gap-4">
            <div class="col">
              <div class="row justify-content-center align-items-center g-2 flex-column">
                <div class="col d-flex justify-content-center align-items-center">
                  <div class="h3 fw-bold text-center text-dark">
                    Welcome to Our Globalogy Family
                  </div>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                  <p class="text-muted h6 w-75 text-center">
                    Join a supportive community of passionate people, where
                    learning, collaboration, and innovation come together.
                    Embark on your Global journey with us.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                  <div class="row justify-content-center align-items-center g-2 flex-nowrap">
                    <div class="col justify-content-center align-items-center flex-column gap-4">
                      <div class="col d-flex justify-content-center align-items-center py-4">
                        <img src={yt} class="img-fluid mid-new" alt="" />
                      </div>
                      <div class="col d-flex justify-content-center align-items-center gap-1">
                        <img src={topArrow} class="img-fluid" alt="" />
                        <a href="" style={{ color: "#FF0000" }}>
                          YouTube
                        </a>
                      </div>
                    </div>
                    <div class="col justify-content-center align-items-center flex-column">
                      <div class="col d-flex justify-content-center align-items-center py-4">
                        <img src={LinkedIn} class="img-fluid mid-new" alt="" />
                      </div>
                      <div class="col d-flex justify-content-center align-items-center gap-1">
                        <img src={topArrow} class="img-fluid " alt="" />
                        <a href="" style={{ color: "#0077B5" }}>
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                  <div class="row justify-content-center align-items-center g-2 flex-nowrap">
                    <div class="col justify-content-center align-items-center flex-column">
                      <div class="col d-flex justify-content-center align-items-center py-4">
                        <img src={discord} class="img-fluid mid-new" alt="" />
                      </div>
                      <div class="col d-flex justify-content-center align-items-center gap-1">
                        <img src={topArrow} class="img-fluid " alt="" />
                        <a href="" style={{ color: "#5865F2" }}>
                          Discord
                        </a>
                      </div>
                    </div>
                    <div class="col justify-content-center align-items-center flex-column">
                      <div class="col d-flex justify-content-center align-items-center py-4">
                        <img src={telegram} class="img-fluid mid-new" alt="" />
                      </div>
                      <div class="col d-flex justify-content-center align-items-center gap-1">
                        <img src={topArrow} class="img-fluid " alt="" />
                        <a href="" style={{ color: "#229ED9" }}>
                          Telegram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
