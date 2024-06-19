import { React, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";

import profilepic from "../../assests/images/profile-pic.png";
const MasterclassTestimonials = () => {
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
              <div
                class="row card d-flex justify-content-center align-items-center  flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center gap-2 py-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Sreeharish</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    Extremely helpful session. I have always relied on Linkedin
                    to search for job opportunities, this session helped where
                    else I can look out for. Visa classifications and updates on
                    new visas were also helpful. Thanks to the team and keep up
                    the good work.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Karan</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    Loved the masterclass thoroughly !! There are some great
                    insights which give you heads up from Day 1. Heartly thank
                    you to Nidhi and all the mentors :)
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Eric</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    There are many aspirants who wish to move abroad but lack
                    the knowledge that was shared by Nidhi in this masterclass.
                    It is quite informative and helpful and I thank Nidhi for
                    sharing her valuable insights. Much appreciated!
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Arushi</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    Insightful session! Love the way Nidhi & all other mentors
                    have shared all their experiences. Thanks for all your hard
                    work! ❤️❤️
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Reynu</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    I’ve been a follower of Nidhi on Instagram. I took her
                    Canada masterclass for my cousin and he’s flying next year.
                    I now look forward to planning my journey and would suggest
                    everyone to check her resources as well before you start
                    planning your move.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="col d-flex justify-content-center align-items-center g-2 gap-2 py-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Vipin</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    I have been following Nidhi and Globalogy for some time. To
                    be honest, they are providing useful information relating to
                    studies as well as immigration services and jobs. They also
                    provide free content and it's very helpful. They are indeed
                    the best team I have seen so far !. I'm happy to have known
                    about this team.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Dinaz</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    I have been following Nidhi and the Globalogy page for a
                    long time now and must say it's one of the most resourceful
                    instagram pages if you are looking to move out from your
                    home country. I also took one of her Masterclasses, and the
                    information shared by Nidhi is very detailed and super
                    helpful. It's so nice to see someone putting in so much
                    research to help people make their careers.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Aniruddh</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    All the content shared by them is so helpful and the best
                    thing is - it is authentic. It's really inspiring to see all
                    the opportunities that are so easily available and we have
                    been missing out then just because of lack of knowledge.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">M Singh</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    I've attended the UK masterclass as well as the linkedin
                    masterclass. Very informative and straightforward. What I
                    really liked was the interactive nature of the webinar and
                    the fact that the mentors are people who've themselves taken
                    the class previously thereby a true testament to the hard
                    work and quality put in by Nidhi and her team. Kudos to you
                    guys for helping people achieve their full potential. Here's
                    hoping I'm a mentor on your future classes 🙏🏻
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Chirag</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    I recently took the UK Masterclass with Nidhi Ma'am
                    (Globalogy) and I would say that it was very useful. They
                    provided me with all the valuable insights required to get a
                    boost to my working abroad dream. Thank You Globalogy Team
                    for such a support.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Chetan</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    I must say globalogy is one of the best for careers abroad
                    guidance, and the best is Nidhi ma'am and her expert team
                    tend to make us believe there is an ocean of opportunities
                    all over the world. And I attended her LinkedIn professional
                    course which is so helpful for getting a job opportunity.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Medha</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    Nidhi's content is honest and reliable and I've been
                    following her eagerly for over a year now. She puts in a lot
                    of research into each opportunity she posts, and comes with
                    a lot of good experience.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Ramya</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    I have been following you for quite some time and feel that
                    the information and content you share is definitely genuine
                    on which one can depend..!! Truly appreciate all the time
                    and efforts that you and your team put in before cascading
                    the information.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
                  <p class="fw-bold">Pankaj</p>
                </div>
                <div class="card-body">
                  <p class="h6 fw-bold">
                    They are doing a great job. The quality of their masterclass
                    is very much higher than the fees they incur for it. They
                    provide us with a great number of resources.
                  </p>
                </div>
              </div>
            </Carousel.Slide>
            {/* <Carousel.Slide>
              <div
                class="row card d-flex justify-content-center align-items-center flex-column gap-2 m-2"
                style={{ width: "20rem", height: "25rem" }}
              >
                <div class="d-flex justify-content-center align-items-center g-2 py-2 gap-2">
                  <img src={profilepic} class="img-fluid rounded-top" alt="" />
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
            </Carousel.Slide> */}
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
  );
};

export default MasterclassTestimonials;
