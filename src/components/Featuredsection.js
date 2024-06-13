import React from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import master1 from "../assests/images/master1.webp";
import hovermaster1 from "../assests/images/hovermaster1.webp";
import master2 from "../assests/images/master2.webp";
import hovermaster2 from "../assests/images/hovermaster2.webp";
import master3 from "../assests/images/master3.webp";
import hovermaster3 from "../assests/images/hovermaster3.webp";
import master4 from "../assests/images/master4.webp";
import hovermaster4 from "../assests/images/hovermaster4.webp";

const Featuredsection = () => {
  return (
    <div class="container-fluid test p-4 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 d-flex justify-content-center align-item-center ">
            <div class="h2 fw-bold py-4 d-flex justify-content-center align-item-center">
              Featured Products
            </div>
          </div>
          <div class="col p-0">
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "25%" }}
              slideGap={{ base: 0, sm: "sm" }}
              loop
              align="start"
              nextControlIcon={<IconArrowRight />}
              previousControlIcon={<IconArrowLeft />}
            >
              <Carousel.Slide>
                <div class="container d-flex justify-content-center">
                  <div class="row product-box d-flex justify-content-end align-item-center flex-column gap-4">
                    <div class="product-icon">
                      <img
                        width="128"
                        height="128"
                        src={master1}
                        alt="grand-master-key"
                        class="product-icon-master"
                      />
                      <img
                        width="128"
                        height="128"
                        src={hovermaster1}
                        alt="grand-master-key"
                        class="product-icon-hovermaster"
                      />
                      <div class="program-name h3 fw-bold">Job Support Service</div>
                      <a href="">Know more about the Service</a>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="container d-flex justify-content-center">
                  <div class="row product-box d-flex justify-content-end align-item-center flex-column gap-4">
                    <div class="product-icon">
                      <img
                        width="128"
                        height="128"
                        src={master2}
                        alt="grand-master-key"
                        class="product-icon-master"
                      />
                      <img
                        width="128"
                        height="128"
                        src={hovermaster2}
                        alt="grand-master-key"
                        class="product-icon-hovermaster"
                      />
                      <div class="program-name h3 fw-bold">Visa Support Service & PR</div>
                      <a href="">Know more about the Service</a>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="container d-flex justify-content-center">
                  <div class="row product-box d-flex justify-content-end align-item-center flex-column gap-4">
                    <div class="product-icon">
                      <img
                        width="128"
                        height="128"
                        src={master3}
                        alt="grand-master-key"
                        class="product-icon-master"
                      />
                      <img
                        width="128"
                        height="128"
                        src={hovermaster3}
                        alt="grand-master-key"
                        class="product-icon-hovermaster"
                      />
                      <div class="program-name h3 fw-bold">
                      Come To Canada
                      </div>
                      <a href="">Know more about the Service</a>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="container d-flex justify-content-center">
                  <div class="row product-box d-flex justify-content-end align-item-center flex-column gap-4">
                    <div class="product-icon">
                      <img
                        width="128"
                        height="128"
                        src={master4}
                        alt="grand-master-key"
                        class="product-icon-master"
                      />
                      <img
                        width="128"
                        height="128"
                        src={hovermaster4}
                        alt="grand-master-key"
                        class="product-icon-hovermaster"
                      />
                      <div class="program-name h3 fw-bold">
                        Direct Job Placement
                      </div>
                      <a href="">Know more about the Service</a>
                    </div>
                  </div>
                </div>
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuredsection;
