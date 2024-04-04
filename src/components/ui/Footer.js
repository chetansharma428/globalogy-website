import React from "react";

import m_icon from "../../assests/images/mail-icon.png";
import texture from "../../assests/images/texture.png";
const Footer = () => {
  return (
    <div>
      <div class="container-fluid bg-dark">
        <div class="container py-4">
          <div class="tex d-flex justify-content-center align-items-center">
            <div
                class="row d-flex justify-content-center align-items-center g-2"
            >
                <div class="col-7 d-flex justify-content-center align-items-center">
                    <div class="h2 fw-bold text-light">What would you like to learn? Talk to us today</div>
                </div>
                <div class="col-5 d-flex justify-content-center align-items-center">
                    <button class="btn">
                        Get Started
                    </button>
                </div>
            </div>
            
          </div>
          <div class="row d-flex justify-content-center align-items-center g-2 text-light">
            <div class="col-lg-3 col-sm-12 d-flex justify-content-center align-items-center">
              <div class="row justify-content-center align-items-center g-2 flex-column text-center">
                <div class="col d-flex justify-content-center align-items-center flex-row">
                  <img
                    src="https://assets-global.website-files.com/641aff1f42be5c6f6a912b8d/64885d09846b08b720f88dc8_123.png"
                    class="img-fluid rounded-top"
                    style={{ width: "53px" }}
                    alt=""
                  />
                  <a href="" class="text-uppercase h5">
                    Globalogy
                  </a>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                  <div class="text-light">
                    Go Global with Globalogy #GoGlobal
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-12 d-flex justify-content-center align-items-center">
              <div class="row d-flex justify-content-center align-items-center g-2 flex-column text-center">
                {" "}
                <div class="py-1 fw-bold">Quick Links</div>
                <a href="" class="col">
                  Home
                </a>
                <a href="" class="col">
                  Courses
                </a>
                <a href="" class="col">
                  Services
                </a>
                <a href="" class="col">
                  Blog
                </a>
                <a href="" class="col">
                  Contact
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-12 d-flex justify-content-center align-items-center">
              <div class="row d-flex justify-content-center align-items-center g-2 flex-column text-center">
                {" "}
                <a href="" class="py-1 fw-bold">
                  Legal
                </a>
                <a href="" class="col">
                  Privacy Policy
                </a>
                <a href="" class="col">
                  Terms of use
                </a>
                <a href="" class="col">
                  Refund & Cancellation Policy
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-sm-12 d-flex justify-content-center align-items-center ">
              <div class="row d-flex justify-content-center align-items-center g-2 flex-column text-center py-4">
                {" "}
                <div class="py-1 fw-bold">Get in Touch</div>
                <a href="" class="col d-flex flex-row gap-1">
                  <img
                    src={m_icon}
                    class="img-fluid rounded-top"
                    alt=""
                    style={{
                      filter: "brightness(0) invert(1)",
                      height: "24px",
                    }}
                  />
                  <p>Support@globalogy.in</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
