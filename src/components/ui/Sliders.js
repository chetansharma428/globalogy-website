import  {React, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import Autoplay from 'embla-carousel-autoplay';


import profilepic from "../../assests/images/profile-pic.png";
const Sliders = () => {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <div>
      <div class="container py-4">
          <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-4 ">
            
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.33333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
              nextControlIcon={<IconArrowRight />}
              previousControlIcon={<IconArrowLeft />}
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
            >
              <Carousel.Slide>
                  <div class="row card d-flex justify-content-center align-items-center  flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }} >  
                      <div class="d-flex justify-content-center align-items-center gap-2 py-2">
                        <img
                          src={profilepic}
                          class="img-fluid rounded-top"
                          alt=""
                        />
                        <p class="fw-bold">Harsh</p>
                      </div>
                      <div class="card-body">
                        <p class="h6 fw-bold">
                          I had a wonderful experience with the resume team
                          recently. The team is super professional, reachable
                          and helpful. One thing I found great was that Nidhi
                          personally reviewed my resume at the end to assure
                          that it was delivered properly.
                        </p>
                      </div>
                  
                  </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Shreyas</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      I have been availing services from Globalogy for some time
                      now. My POC Stuti has been exceptional in assisting me and
                      is prompt in her work. She is proactive and she keeps
                      providing me with updates.. Whenever I have asked for a
                      call, she has been available and sets proper expectations
                      in regards to my job applications. I am glad Nidhi has a
                      great team that reflects her own values and delivers a
                      great service as promised by her.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">John</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      The call was worth every penny and second. The way Nidhi
                      understood the concerns and gave suggestions was so
                      effective. I was confused about my career and my move to
                      the UK, but the call with Nidhi made a lot of things
                      clear. Thank you for your time, Nidhi. I’d highly
                      recommend everyone who wants to move abroad and is
                      confused to consult with you.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Kritika</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      Within a week of applying your methods, I got an
                      internship and had an interview. I always thought that
                      since I didn't have conventional work experience,
                      companies wouldn't consider me for interviews, but they
                      did. And it all happened because of your masterclass. What
                      magic are you spreading through your courses?
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Karan</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      I took the Canada course and I'll never forget the
                      session's impact. It changed my life, my attitude toward
                      my dreams and career, and my strategy for Canada. I'm
                      moving to British Columbia soon and found a job from India
                      using everything Nidhi taught in the session. I don't have
                      anyone to thank except Nidhi and Globalogy.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="col d-flex justify-content-center align-items-center g-2 gap-2 py-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Aniruddh</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      The call was worth every penny and second. The way Nidhi
                      understood the concerns and gave suggestions was so
                      effective. I was confused about my career and my move to
                      the UK, but the call with Nidhi made a lot of things
                      clear. Thank you for your time, Nidhi. I’d highly
                      recommend everyone who wants to move abroad and is
                      confused to consult with you. :)
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Reynu</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      I’ve been a follower of Nidhi when she had just a few
                      hundred followers on Instagram and it’s been a pleasure to
                      see the growth and development that she has to offer. I
                      took her Canada masterclass for my cousin and he’s flying
                      next year. I now look forward to planning my journey and
                      would suggest everyone to check her resources as well
                      before you start planning your move.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Clevit</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      Globalogy Consultancy is an outstanding firm that delivers
                      exceptional results. Their consultants possess deep
                      expertise and provide insightful recommendations. The
                      level of professionalism and attention to detail is
                      commendable. Highly recommended for anyone seeking
                      top-notch consultancy services.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Anusha</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      I was connected to Samiksha and she was extremely helpful.
                      She was very friendly and professional at the same time. I
                      was very worried about me being a recent graduate but
                      Samiksha really made me feel like Globalogy is with me in
                      my journey and I don’t have to go through this all alone.
                      Very glad to have connected with Globalogy.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Anushila</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      When it comes to looking for opportunities abroad,
                      Globalogy is the stop. Not only do they have a niche for
                      foreign services/visa process/ admission to universities,
                      they look out for Indian government funded programmes too.
                      All in all a hassle free experience through the
                      masterclass. And to add, Nidhi is reachable too and makes
                      sure the candidates are properly guided. Way to go!
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Nija</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      Globalogy services have been consistently good. From the
                      day I engaged with them they have assisted in many ways &
                      the quality of their work is better. I have taken the
                      silver service for 1 month, the team was quite engaged in
                      sending out applications and letting me know the status.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Shilpa</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      Globalogy offers services that have consistently exceeded
                      my expectations. From the moment I engaged with them, the
                      team demonstrated professionalism, expertise, and a
                      genuine commitment to customer satisfaction. They provided
                      clear communication throughout the process and tailored
                      their solutions to meet my specific needs. Supriya
                      assisted in many ways & the quality of their work and
                      attention to detail is good.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Pradeep</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      My experience with Globalogy has been very positive,
                      particularly due to Chhavi, who has served as my primary
                      contact for my job search. Right from the start, she has
                      been incredibly supportive and dedicated a lot of effort
                      to applying for the jobs on my behalf. I would highly
                      recommend Globalogy.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Jaydeep</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      I have been a long-time follower of Nidhi and recently
                      engaged with Globalogy services. The team at Globalogy was
                      exceptional, providing me with excellent support
                      throughout. I must especially commend Mr. Vignesh for his
                      unwavering support and guidance, which gave me a solid
                      foundation for my job search. The entire team contributed
                      to making my experience highly positive, and I
                      wholeheartedly recommend their services.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
              <Carousel.Slide>
                <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                  <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                    <img
                      src={profilepic}
                      class="img-fluid rounded-top"
                      alt=""
                    />
                    <p class="fw-bold">Shubhang</p>
                  </div>
                  <div class="card-body">
                    <p class="h6 fw-bold">
                      Really valued the customised assistance with my LinkedIn
                      profile and CV. Their expertise has notably boosted my
                      networking potential in the job market.
                    </p>
                  </div>
                </div>
              </Carousel.Slide>
            </Carousel>
            {/* <div class="card-body">
              <div class="row d-flex j class="h6 fw-bold"ustify-content-center align-items-center g-2 flex-row gap-4">
                <div class="col d-flex justify-content-center align-items-center text-center">
                  <Swiper
                    // install Swiper modules
                    modules={[
                      Navigation,
                      Pagination,
                      Scrollbar,
                      // Autoplay,
                      EffectFade,
                    ]}
                    spaceBetween={50}
                    slidesPerView={3}
                    // autoplay={{ delay: 3000, disableOnInteraction: "true" }}
                    loop={true}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    navigation
                  >
                    <SwiperSlide>
                      <div class="mid row card d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center gap-2">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Harsh</p>
                        </div>
                        <div class="col">
                          <p>
                            I had a wonderful experience with the resume team
                            recently. The team is super professional, reachable
                            and helpful. One thing I found great was that Nidhi
                            personally reviewed my resume at the end to assure
                            that it was delivered properly.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="mid row card d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Shreyas</p>
                        </div>
                        <div class="col">
                          <p>
                            I have been availing services from Globalogy for
                            some time now. My POC Stuti has been exceptional in
                            assisting me and is prompt in her work. She is
                            proactive and she keeps providing me with updates..
                            Whenever I have asked for a call, she has been
                            available and sets proper expectations in regards to
                            my job applications. I am glad Nidhi has a great
                            team that reflects her own values and delivers a
                            great service as promised by her.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="mid row card d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">John</p>
                        </div>
                        <div class="col">
                          <p>
                            The call was worth every penny and second. The way
                            Nidhi understood the concerns and gave suggestions
                            was so effective. I was confused about my career and
                            my move to the UK, but the call with Nidhi made a
                            lot of things clear. Thank you for your time, Nidhi.
                            I’d highly recommend everyone who wants to move
                            abroad and is confused to consult with you.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="mid row card d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Kritika</p>
                        </div>
                        <div class="col">
                          <p>
                            Within a week of applying your methods, I got an
                            internship and had an interview. I always thought
                            that since I didn't have conventional work
                            experience, companies wouldn't consider me for
                            interviews, but they did. And it all happened
                            because of your masterclass. What magic are you
                            spreading through your courses?
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div class="mid row card d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Karan</p>
                        </div>
                        <div class="col">
                          <p>
                            I took the Canada course and I'll never forget the
                            session's impact. It changed my life, my attitude
                            toward my dreams and career, and my strategy for
                            Canada. I'm moving to British Columbia soon and
                            found a job from India using everything Nidhi taught
                            in the session. I don't have anyone to thank except
                            Nidhi and Globalogy.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div class="mid col-lg-3 col-sm-12 d-flex justify-content-center align-items-center text-center">
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
                    navigation
                  >
                    <SwiperSlide>
                      <div class="mid row card d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-2">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold h5">Aniruddh</p>
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
                      <div class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2" style={{ width: "20rem", height:"25rem" }}>
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Reynu</p>
                        </div>
                        <div class="col">
                          <p>
                            I’ve been a follower of Nidhi when she had just a
                            few hundred followers on Instagram and it’s been a
                            pleasure to see the growth and development that she
                            has to offer. I took her Canada masterclass for my
                            cousin and he’s flying next year. I now look forward
                            to planning my journey and would suggest everyone to
                            check her resources as well before you start
                            planning your move.
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
                          <p class="fw-bold">Clevit</p>
                        </div>
                        <div class="col">
                          <p>
                            Globalogy Consultancy is an outstanding firm that
                            delivers exceptional results. Their consultants
                            possess deep expertise and provide insightful
                            recommendations. The level of professionalism and
                            attention to detail is commendable. Highly
                            recommended for anyone seeking top-notch consultancy
                            services.
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
                          <p class="fw-bold">Anusha</p>
                        </div>
                        <div class="col">
                          <p>
                            I was connected to Samiksha and she was extremely
                            helpful. She was very friendly and professional at
                            the same time. I was very worried about me being a
                            recent graduate but Samiksha really made me feel
                            like Globalogy is with me in my journey and I don’t
                            have to go through this all alone. Very glad to have
                            connected with Globalogy.
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
                          <p class="fw-bold">Anushila</p>
                        </div>
                        <div class="col">
                          <p>
                            When it comes to looking for opportunities abroad,
                            Globalogy is the stop. Not only do they have a niche
                            for foreign services/visa process/ admission to
                            universities, they look out for Indian government
                            funded programmes too. All in all a hassle free
                            experience through the masterclass. And to add,
                            Nidhi is reachable too and makes sure the candidates
                            are properly guided. Way to go!
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div class="mid col-lg-3 col-sm-12 d-flex justify-content-center align-items-center text-center">
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
                    navigation
                  >
                    <SwiperSlide>
                      <div class="row d-flex justify-content-center align-items-center g-2 flex-column gap-2 ">
                        <div class="col d-flex justify-content-center align-items-center g-2 gap-1">
                          <img
                            src={profilepic}
                            class="img-fluid rounded-top"
                            alt=""
                          />
                          <p class="fw-bold">Nija</p>
                        </div>
                        <div class="col">
                          <p>
                            Globalogy services have been consistently good. From
                            the day I engaged with them they have assisted in
                            many ways & the quality of their work is better. I
                            have taken the silver service for 1 month, the team
                            was quite engaged in sending out applications and
                            letting me know the status.
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
                          <p class="fw-bold">Shilpa</p>
                        </div>
                        <div class="col">
                          <p>
                            Globalogy offers services that have consistently
                            exceeded my expectations. From the moment I engaged
                            with them, the team demonstrated professionalism,
                            expertise, and a genuine commitment to customer
                            satisfaction. They provided clear communication
                            throughout the process and tailored their solutions
                            to meet my specific needs. Supriya assisted in many
                            ways & the quality of their work and attention to
                            detail is good.
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
                          <p class="fw-bold">Pradeep</p>
                        </div>
                        <div class="col">
                          <p>
                            My experience with Globalogy has been very positive,
                            particularly due to Chhavi, who has served as my
                            primary contact for my job search. Right from the
                            start, she has been incredibly supportive and
                            dedicated a lot of effort to applying for the jobs
                            on my behalf. I would highly recommend Globalogy.
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
                          <p class="fw-bold">Jaydeep</p>
                        </div>
                        <div class="col">
                          <p>
                            I have been a long-time follower of Nidhi and
                            recently engaged with Globalogy services. The team
                            at Globalogy was exceptional, providing me with
                            excellent support throughout. I must especially
                            commend Mr. Vignesh for his unwavering support and
                            guidance, which gave me a solid foundation for my
                            job search. The entire team contributed to making my
                            experience highly positive, and I wholeheartedly
                            recommend their services.
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
                          <p class="fw-bold">Shubhang</p>
                        </div>
                        <div class="col">
                          <p>
                            Really valued the customised assistance with my
                            LinkedIn profile and CV. Their expertise has notably
                            boosted my networking potential in the job market.
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div> */}
          </div>
        </div>
    </div>
  )
}

export default Sliders
