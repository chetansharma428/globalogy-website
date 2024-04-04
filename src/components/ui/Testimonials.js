import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import profilepic from "../../assests/images/profile-pic.png";

const Testimonials = () => {
  return (
    <div>
      <div class="container-fluid bg-light" style={{ padding: "50px 0px" , color:"black"}}>
        <div class="container py-4">
          <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-4 ">
            <div class="col d-flex justify-content-center align-items-center flex-column">
              <div class="col">
                <div class="h2 fw-bold">What our Student Says</div>
              </div>
              <div class="col-10">
                <p class="text-center">
                  Discover inspiration and insights through recent reviews from
                  our students. Their success stories reflect the transformative
                  journey of learning and growth with Globalogy.
                </p>
              </div>
            </div>
            <div class="col">
              <div class="row d-flex justify-content-center align-items-center g-2 flex-row gap-2">
                <div class="mid col-lg-4 d-flex justify-content-center align-items-center text-center">
                  <Swiper
                    // install Swiper modules
                    modules={[
                      Navigation,
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            I took the Canada course and I'll never forget the
                            session's impact. It changed my life, my attitude
                            toward my dreams and career, and my strategy for
                            Canada. I'm moving to British Columbia soon and
                            found a job from India using everything Nidhi taught
                            in the session. I don't have anyone to thank except
                            Nidhi and Globalogy. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            Within a week of applying your methods, I got an
                            internship and had an interview. I always thought
                            that since I didn't have conventional work
                            experience, companies wouldn't consider me for
                            interviews, but they did. And it all happened
                            because of your masterclass. What magic are you
                            spreading through your courses? :0
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            Within a week of applying your methods, I got an
                            internship and had an interview. I always thought
                            that since I didn't have conventional work
                            experience, companies wouldn't consider me for
                            interviews, but they did. And it all happened
                            because of your masterclass. What magic are you
                            spreading through your courses? :0
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div class="mid col-lg-4 d-flex justify-content-center align-items-center text-center">
                  <Swiper
                    // install Swiper modules
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      Autoplay,
                      EffectFade,
                    ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            I took the Canada course and I'll never forget the
                            session's impact. It changed my life, my attitude
                            toward my dreams and career, and my strategy for
                            Canada. I'm moving to British Columbia soon and
                            found a job from India using everything Nidhi taught
                            in the session. I don't have anyone to thank except
                            Nidhi and Globalogy. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            Within a week of applying your methods, I got an
                            internship and had an interview. I always thought
                            that since I didn't have conventional work
                            experience, companies wouldn't consider me for
                            interviews, but they did. And it all happened
                            because of your masterclass. What magic are you
                            spreading through your courses? :0
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            Within a week of applying your methods, I got an
                            internship and had an interview. I always thought
                            that since I didn't have conventional work
                            experience, companies wouldn't consider me for
                            interviews, but they did. And it all happened
                            because of your masterclass. What magic are you
                            spreading through your courses? :0
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div class="mid col-lg-4 d-flex justify-content-center align-items-center text-center">
                  <Swiper
                    // install Swiper modules
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      Autoplay,
                      EffectFade,
                    ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            I took the Canada course and I'll never forget the
                            session's impact. It changed my life, my attitude
                            toward my dreams and career, and my strategy for
                            Canada. I'm moving to British Columbia soon and
                            found a job from India using everything Nidhi taught
                            in the session. I don't have anyone to thank except
                            Nidhi and Globalogy. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            Within a week of applying your methods, I got an
                            internship and had an interview. I always thought
                            that since I didn't have conventional work
                            experience, companies wouldn't consider me for
                            interviews, but they did. And it all happened
                            because of your masterclass. What magic are you
                            spreading through your courses? :0
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            Within a week of applying your methods, I got an
                            internship and had an interview. I always thought
                            that since I didn't have conventional work
                            experience, companies wouldn't consider me for
                            interviews, but they did. And it all happened
                            because of your masterclass. What magic are you
                            spreading through your courses? :0
                          </p>
                        </div>
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
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you. :)
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
