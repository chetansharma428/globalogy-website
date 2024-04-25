import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

import profilepic from "../../assests/images/profile-pic.png";

const Achievements = () => {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center align-items-center g-2 gap-4 py-4">
          <div class="col-lg-6 col-sm-12">
            <div class="col">
              <div class="row d-flex justify-content-center align-items-center g-2 flex-row gap-4">
                <div class="mid col-lg-4 d-flex justify-content-center align-items-center text-center">
                  <Swiper
                    // install Swiper modules
                    modules={[
                      Pagination,
                      Scrollbar,
                      Autoplay,
                      EffectFade,
                    ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    
                    autoplay={{ delay: 1500 }}
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div class="mid col-lg-4 d-flex justify-content-center align-items-center text-center">
                  <Swiper
                    // install Swiper modules
                    modules={[
                      Pagination,
                      Scrollbar,
                      Autoplay,
                      EffectFade,
                    ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    
                    autoplay={{ delay: 1500 }}
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* <div class="mid col-lg-4 d-flex justify-content-center align-items-center text-center">
                  <Swiper
                    // install Swiper modules
                    modules={[
                      Pagination,
                      Scrollbar,
                      Autoplay,
                      EffectFade,
                    ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    
                    autoplay={{ delay: 1500 }}
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                  >
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Chetan</p>
                        </div>
                        <div class="col">
                          <p class="text-center">Full-Stack Developer</p>
                        </div>
                        <div class="col">Amsterdam</div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-content-center align-items-center g-2 d-flex flex-column">
              <div class="col">
                <div class="h4 text-danger fw-bold">Achievements</div>
              </div>
              <div class="col">
                <div class="h3">Globalogy students: Powering Top Giants</div>
              </div>
              <div class="col h6 fw-normal">
                <p>
                  Meet our proud alumni shaping the future at major Giant
                  companies. Discover the impact Globalogy has had on their
                  careers and the landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
