import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useSpring } from "framer-motion";
import { Image, Accordion, Grid, Container, Title } from "@mantine/core";
import image from "../assests/images/Faq_image.svg";
import classes from "./ui/Navbar.module.css";
import "react-vertical-timeline-component/style.min.css";
import border from "../assests/images/border-line.png";
import dp from "../assests/images/Untitled design1.png";
import pic from "../assests/images/user 1.png";
import star from "../assests/images/star-rating-removebg-preview.png";
import { Progress } from "@mantine/core";
import reading from "../assests/images/reading.png";
import travel from "../assests/images/travel.png";
import resident from "../assests/images/resident.png";
import confused from "../assests/images/confused.png";
import card1 from "../assests/images/card1.webp";
import card2 from "../assests/images/card2.webp";
import card3 from "../assests/images/card3.webp";
import About from "./ui/About";
import Founder from "./ui/Founder";
import { FaqWithImage } from "./ui/Faq";
import demodp from "../assests/images/banner-with-pic 1.png";
import ReactPlayer from "react-player/youtube";
import "./course.css";
import MasterclassTestimonials from "./ui/MasterclassTestimonials";
import Footer from "./ui/Footer";
const Course = (props) => {
  const{
    header1,
    header2,
    header3,
    header4,
    time,
    hours,
    Enroll_link,
    button1,
    header5,
    header6,
    subheader1,
    header7,
    subheader2,
    header8,
    subheader3,
    header9,
    header10,
    header11,
    subheader4,
    header12,
    subheader5,
    header13,
    subheader6,
    header14,
    subheader7,
    button2,
    header15,
    ytlink,
    header16,
    header17,
    subheader8,
    header18,
    subheader9,
    header19,
    subheader10,
    header20,
    subheader11,
    card1img,
    card2img,
    card3img,
    card4img,
    header21,
    header22,
    subheader12,
    subheader13,
    header23,
    question1,
    answer1,
    question2,
    answer2,
    question3,
    answer3,
    question4,
    answer4,
    question5,
    answer5,
    price,
    msrp,
    date,
  } = props.data[0];
  const initialDate = new Date("2023-07-28"); // Setting the initial date
  const initialPercentage = 78.5; // Setting the initial percentage

  const [percentage, setPercentage] = useState(() => {
    const storedPercentage = parseFloat(
      localStorage.getItem("previousPercentage")
    );
    return storedPercentage || initialPercentage;
  });

  useEffect(() => {
    const currentDate = new Date();
    const timeDiff = Math.abs(currentDate - initialDate);
    const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // Calculate the number of days since the initial date

    let newPercentage = initialPercentage + 3;
    if (newPercentage > 99) {
      newPercentage = initialPercentage;
    }
    // Calculate a new percentage and reset if it exceeds 99

    const randomIncrement = Math.random() * 4;
    let updatedPercentage = percentage + randomIncrement;
    if (updatedPercentage > 99) {
      updatedPercentage = initialPercentage;
    }
    // Add a random increment to the current percentage and reset if it exceeds 99

    setPercentage(updatedPercentage);
    localStorage.setItem("previousPercentage", updatedPercentage.toFixed(1));
    // Update the state and store the new percentage in localStorage
  }, []); // Empty dependency array ensures this runs only on mount (initial load)

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  const closeModal = () => {
    setIsPlaying(false);
  };

  const useScrollHeight = (sectionId) => {
    const { scrollY } = useScroll();
    const controls = useAnimation();

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionHeight = section.scrollHeight;
          const windowHeight = window.innerHeight;
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + sectionHeight;

          let percentScrolled = 0;

          const scrollPosition = scrollY.get();

          if (
            scrollPosition >= sectionTop &&
            scrollPosition <= sectionBottom - windowHeight
          ) {
            const maxScroll = sectionHeight - windowHeight;
            const scrollWithinSection = scrollPosition - sectionTop;
            percentScrolled = (scrollWithinSection / maxScroll) * 100;
          } else if (scrollPosition < sectionTop) {
            percentScrolled = 0;
          } else if (scrollPosition > sectionBottom - windowHeight) {
            percentScrolled = 100;
          }

          controls.start({ height: `${percentScrolled}%` });
        }
      };

      const unsubscribeScroll = scrollY.onChange(handleScroll);
      return () => unsubscribeScroll();
    }, [controls, scrollY, sectionId]);

    return controls;
  };
  const controls = useScrollHeight("scroll-section");
  const fadeInRefs = useRef([]);
  const popUpRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeInRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    popUpRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fadeInRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      popUpRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <div>
      <div class="container-fluid bg-light text-dark p-0">
        <div class="hero-section ">
          <div class="container">
            <div class="row d-flex justify-content-center align-items-center g-2">
              <div
                ref={(el) => (popUpRefs.current[0] = el)}
                class="col-lg-7 col-sm-12 d-flex gap-4 flex-column hero-content pop-up"
              >
                <div class="display-4" style={{ fontWeight: "800" }}>
                  {header1}
                </div>
                <div
                  class="display-4"
                  style={{ fontWeight: "800", color: "#237b54" }}
                >
                  {" "}
                  {header2}
                </div>
                <div class="subheader">
                  <div class="h5 fw-bold">with Nidhi Nagori</div>
                </div>
                <div class="h5">{header4}</div>
                <div class="col d-flex justify-content-center align-items-between flex-column">
                  <img src={border} class="img-fluid rounded-top" alt="" />
                  <div class="hero-capsule d-flex flex-row justify-content-start align-items-center gap-4 py-4">
                    {/* <div class="capsule d-flex justify-content-center align-items-center flex-row gap-4">
                      <svg
                        width="21"
                        height="24"
                        viewBox="0 0 21 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.33333 23.6667H18.6667C19.9535 23.6667 21 22.6202 21 21.3333V5.00001C21 3.71318 19.9535 2.66668 18.6667 2.66668H16.3333V0.333344H14V2.66668H7V0.333344H4.66667V2.66668H2.33333C1.0465 2.66668 0 3.71318 0 5.00001V21.3333C0 22.6202 1.0465 23.6667 2.33333 23.6667ZM2.33333 6.16668H18.6667V8.50001H2.33333V6.16668Z"
                          fill="#ffc107"
                          fill-opacity="1"
                        ></path>
                      </svg>
                      <div class="capsule-text">
                        <div class="h5 fw-bold text-center">{time}</div>
                      </div>
                    </div> */}
                    <div class="capsule d-flex justify-content-center align-items-center flex-row gap-4">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 0.333344C6.06704 0.333344 0.833374 5.56701 0.833374 12C0.833374 18.433 6.06704 23.6667 12.5 23.6667C18.933 23.6667 24.1667 18.433 24.1667 12C24.1667 5.56701 18.933 0.333344 12.5 0.333344ZM16.3419 17.4915L11.3334 12.483V5.00001H13.6667V11.517L17.9915 15.8418L16.3419 17.4915V17.4915Z"
                          fill="#ffc107"
                          fill-opacity="1"
                        ></path>
                      </svg>
                      <div class="capsule-text">
                        <div class="h5 fw-bold text-center m-0" >{hours}</div>
                      </div>
                    </div>
                  </div>
                  <img src={border} class="img-fluid rounded-top" alt="" />
                </div>
                <div class="col">
                  <div class="hero-button-wrapper">
                    <a
                      href={Enroll_link}
                      class="hero-button d-flex justify-content-center align-items-center p-2"
                    >
                      <span class="h4 m-2 fw-bold text-light">{button1}</span>
                    </a>
                    <div className="progress-bar">
                      <Progress.Root size="xl" radius="lg">
                        <Progress.Section
                          value={`${percentage.toFixed(1)}`}
                          color="#ffc107"
                        >
                          {/* <Progress.Label>{percentage.toFixed(1)}%</Progress.Label> */}
                        </Progress.Section>
                      </Progress.Root>
                    </div>
                    <div className="sold-out-percentage">
                      <div class="col d-flex justify-content-center align-items-center gap-2">
                        <div class="text h5 text-center">
                          <span class="fw-bold px-2">
                            {" "}
                            {percentage.toFixed(1)}%{" "}
                          </span>
                          Sold Out!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 col-sm-12">
                <img src={dp} class="img-fluid rounded-top" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="ratings">
          <div class="container-fluid " style={{ backgroundColor: "#ebf1ff" }}>
            <div
              ref={(el) => (popUpRefs.current[1] = el)}
              class="banner-small pop-up"
            >
              <div class="container-xl">
                <div class="banner-small-content">
                  <div class="row justify-content-center align-items-center g-2">
                    <div class="col-lg-4 col-sm-12">
                      <div class="banner-small-heading ">
                        <span class="display-5 fw-bold text-center">
                          {header5}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      <div className="row justify-content-center align-items-center g-2 gap-4">
                        <div className="col box-content d-flex flex-column gap-4">
                          <div className="banner-small-heading">
                            {/* <Text size="xl" fw={900} color="#237b54">
                              1800+
                            </Text> */}
                            <div
                              class="h4"
                              style={{
                                fontWeight: "800",
                                color: "#237b54",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              {header6}
                            </div>
                          </div>
                          <div className="banner-small-subheading h5">
                            {subheader1}
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src={pic}
                              style={{ width: "120px" }}
                              alt="Attendees"
                            />
                          </div>
                        </div>
                        <div className="col box-content d-flex flex-column gap-4">
                          <div className="banner-small-heading">
                            <div
                              class="h4"
                              style={{
                                fontWeight: "800",
                                color: "#237b54",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              {header7}
                            </div>
                          </div>
                          <div className="banner-small-subheading h5">
                            {subheader2}
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src={star}
                              style={{ width: "120px" }}
                              alt="Ratings"
                            />
                          </div>
                        </div>
                        <div className="col box-content d-flex flex-column gap-4">
                          <div className="banner-small-heading">
                            <div
                              class="h4"
                              style={{
                                fontWeight: "800",
                                color: "#237b54",
                                fontFamily: "Poppins, sans-serif",
                              }}
                            >
                              {header8}
                            </div>
                          </div>
                          <div className="banner-small-subheading h5">
                            {subheader3}
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src={pic}
                              style={{ width: "120px" }}
                              alt="Tools"
                            />
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
        <div class="review">
          <div class="container-fluid">
            <div class="container-xl">
              <div class="row justify-content-center align-items-center g-2 flex-column">
                <div class="col">
                  <div class="heading-wrapper">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                      <div
                        ref={(el) => (popUpRefs.current[2] = el)}
                        class="display-5 fw-bold pop-up"
                      >
                        {" "}
                        Read Past Reviews
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="301"
                        height="14"
                        viewBox="0 0 301 14"
                        fill="none"
                      >
                        <path
                          d="M65.8862 2.80937C94.364 2.40435 122.856 2.14398 151.348 2.02826C179.839 1.91254 208.066 1.95112 236.416 2.13434C252.52 2.24042 268.64 2.38507 284.744 2.57793L286.943 0.601051C250.173 0.996427 213.417 1.48824 176.66 2.07648C139.904 2.66472 103.147 3.3494 66.3887 4.14015C45.7541 4.58375 25.1349 5.04663 4.49985 5.54808C3.29059 5.57701 1.47568 5.76988 0.788687 6.50277C0.148519 7.18745 1.32417 7.54425 2.30085 7.52496C40.6076 6.91743 78.9415 6.85957 117.256 7.36103C155.571 7.86248 193.851 8.93289 232.08 10.553C253.558 11.4594 275.02 12.5491 296.449 13.8124C297.611 13.8799 299.535 13.5231 300.16 12.8577C300.847 12.1345 299.578 11.8837 298.648 11.8355C260.515 9.58864 222.286 7.89141 184.022 6.7535C145.759 5.61558 107.429 5.04663 69.1108 5.03698C47.5802 5.03698 26.0484 5.20092 4.51535 5.54808L2.31635 7.52496C39.0594 6.62813 75.8173 5.83738 112.575 5.13342C149.332 4.4391 186.088 3.83157 222.844 3.33011C243.478 3.05046 264.127 2.79009 284.76 2.56829C285.969 2.55865 287.8 2.33685 288.471 1.6136C289.142 0.890351 287.92 0.601051 286.959 0.591407C258.455 0.263534 229.981 0.0610241 201.491 0.0128074C173.001 -0.0354093 144.773 0.0513807 116.421 0.292464C100.314 0.427471 84.1921 0.610694 68.0852 0.842134C66.876 0.861421 65.0454 1.07357 64.374 1.79682C63.7338 2.4815 64.9095 2.8383 65.8862 2.81902L65.8862 2.80937Z"
                          fill="#ffc107"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <MasterclassTestimonials />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={(el) => (popUpRefs.current[3] = el)}
          class="money-banner pop-up"
          style={{ paddingBottom: "5rem", paddingTop:"6rem", backgroundColor:"rgb(235, 241, 255)" }}
        >
          <div class="container-fluid">
            <div class="container-xl">
              <div class="row justify-content-center align-items-center g-2 flex-column">
                <div class="col">
                  <div class="heading-wrapper">
                    <div class="d-flex justify-content-center align-items-center flex-column mb-4">
                      <div class="h4 text-muted fw-bold text-center">
                        {header9}
                      </div>
                      <div class="display-6 fw-bold text-center">
                        {header10}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="301"
                        height="14"
                        viewBox="0 0 301 14"
                        fill="none"
                      >
                        <path
                          d="M65.8862 2.80937C94.364 2.40435 122.856 2.14398 151.348 2.02826C179.839 1.91254 208.066 1.95112 236.416 2.13434C252.52 2.24042 268.64 2.38507 284.744 2.57793L286.943 0.601051C250.173 0.996427 213.417 1.48824 176.66 2.07648C139.904 2.66472 103.147 3.3494 66.3887 4.14015C45.7541 4.58375 25.1349 5.04663 4.49985 5.54808C3.29059 5.57701 1.47568 5.76988 0.788687 6.50277C0.148519 7.18745 1.32417 7.54425 2.30085 7.52496C40.6076 6.91743 78.9415 6.85957 117.256 7.36103C155.571 7.86248 193.851 8.93289 232.08 10.553C253.558 11.4594 275.02 12.5491 296.449 13.8124C297.611 13.8799 299.535 13.5231 300.16 12.8577C300.847 12.1345 299.578 11.8837 298.648 11.8355C260.515 9.58864 222.286 7.89141 184.022 6.7535C145.759 5.61558 107.429 5.04663 69.1108 5.03698C47.5802 5.03698 26.0484 5.20092 4.51535 5.54808L2.31635 7.52496C39.0594 6.62813 75.8173 5.83738 112.575 5.13342C149.332 4.4391 186.088 3.83157 222.844 3.33011C243.478 3.05046 264.127 2.79009 284.76 2.56829C285.969 2.55865 287.8 2.33685 288.471 1.6136C289.142 0.890351 287.92 0.601051 286.959 0.591407C258.455 0.263534 229.981 0.0610241 201.491 0.0128074C173.001 -0.0354093 144.773 0.0513807 116.421 0.292464C100.314 0.427471 84.1921 0.610694 68.0852 0.842134C66.876 0.861421 65.0454 1.07357 64.374 1.79682C63.7338 2.4815 64.9095 2.8383 65.8862 2.81902L65.8862 2.80937Z"
                          fill="#ffc107"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="col py-4">
                  <div className="row g-4 align-items-stretch">
                    <div className="col-md-6 col-lg-6">
                      <div className="box-content-money">
                        <div className="content">
                          <img
                            className="icon"
                            src={reading}
                            alt="Confused"
                            style={{ width: "64px" }}
                          />
                          <div className="text-content">
                            <div className="title h4 fw-bold">{header11}</div>
                            <p className="description">{subheader4}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="box-content-money">
                        <div className="content">
                          <img
                            className="icon"
                            src={resident}
                            alt="Confused"
                            style={{ width: "64px" }}
                          />
                          <div className="text-content">
                            <div className="title h4 fw-bold">{header12}</div>
                            <p className="description">{subheader5}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="box-content-money">
                        <div className="content">
                          <img
                            className="icon"
                            src={confused}
                            alt="Confused"
                            style={{ width: "64px" }}
                          />
                          <div className="text-content">
                            <div className="title h4 fw-bold">{header13}</div>
                            <p className="description">{subheader6}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="box-content-money">
                        <div className="content">
                          <img
                            className="icon"
                            src={travel}
                            alt="Confused"
                            style={{ width: "64px" }}
                          />
                          <div className="text-content">
                            <div className="title h4 fw-bold">{header14}</div>
                            <p className="description">{subheader7}</p>
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
        <div class="video-message">
          <div class="video-block bg-gradient">
            <div
              ref={(el) => (popUpRefs.current[4] = el)}
              class="video-heading pop-up"
            >
              {/* <div class="section-heading ">If yes, then Nidhi has</div> */}
              <div class="heading-second h1 text-light fw-bold">{header15}</div>
            </div>
            <div class="video-wrapper">
              <div class="video-light">
                <div class="container-fluid">
                  {!isPlaying && (
                    <div className="overlay">
                      <img
                        src={demodp} // Replace with your actual image path
                        alt="Video Thumbnail"
                        className="thumbnail"
                      />
                      <button
                        className="play-button"
                        onClick={handlePlayButtonClick}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="142"
                          height="138"
                          viewBox="0 0 142 138"
                          fill="none"
                          class="video-icon"
                        >
                          <path
                            d="M137.333 68.8043C137.333 104.512 107.718 133.609 70.9998 133.609C34.2816 133.609 4.6665 104.512 4.6665 68.8043C4.6665 33.0963 34.2816 4 70.9998 4C107.718 4 137.333 33.0963 137.333 68.8043Z"
                            fill="white"
                            stroke="#237b54"
                            strokeWidth="8"
                          />
                          <path
                            d="M107.696 70.3334L54.9458 102.113L54.9458 38.554L107.696 70.3334Z"
                            fill="#237b54"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                  {isPlaying && (
                    <div className="modal">
                      <div className="modal-content">
                        <ReactPlayer
                          url={ytlink}
                          playing={isPlaying}
                          controls={true}
                          width="-webkit-fill-available"
                        />
                      </div>
                      <span className="close-button" onClick={closeModal}>
                        &times;
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="67"
                viewBox="0 0 22 67"
                fill="none"
              >
                <path
                  d="M3.48929 32.2373C3.34187 32.6572 3.36242 33.0724 3.48961 33.4845C3.48949 33.0688 3.4894 32.653 3.48929 32.2373ZM9.72048 14.907C9.80393 14.5027 9.88736 14.0984 9.97078 13.6941C9.74516 14.0725 9.66438 14.4758 9.72048 14.907ZM8.75571 14.3185C8.8468 13.9072 8.9381 13.4961 9.0292 13.0848C8.82324 13.4752 8.69803 13.8822 8.75571 14.3185ZM14.7171 62.573C14.8416 62.7096 15.052 62.5846 15.067 62.7829C15.0708 62.8336 14.8986 62.9325 15.1017 62.9062C15.1776 62.8963 15.2776 62.9852 15.3355 62.8716C15.3736 62.7965 15.3358 62.7402 15.2932 62.6745C15.1505 62.4542 14.9659 62.4898 14.7171 62.573ZM15.5955 63.91C15.8446 63.4523 15.8575 63.2439 15.6592 63.0736C15.7201 63.3542 15.2267 63.5846 15.5955 63.91ZM4.72398 32.0889C4.59632 32.6877 4.59387 33.2816 4.75809 33.8696C4.7468 33.2761 4.73548 32.6827 4.72398 32.0889ZM19.2647 20.158C19.0449 20.5772 19.0236 21.0287 18.9855 21.4781C19.2263 21.0654 19.3476 20.6308 19.2647 20.158ZM5.31851 34.498C5.24323 32.7805 5.38076 31.0776 5.66337 29.382C5.17916 31.0679 5.03845 32.7732 5.31851 34.498ZM10.0134 16.3174C10.1695 15.4434 10.2619 14.5552 10.5218 13.6989C10.7793 12.8496 11.0775 12.0134 11.3621 11.1755C10.4797 12.7791 10.0171 14.4909 10.0134 16.3174ZM7.34133 15.1723C7.83052 12.9635 8.72957 10.9057 9.74905 8.89242C8.37145 10.7738 7.5964 12.8772 7.34133 15.1723ZM2.12556 34.9427C1.96732 32.0105 2.63733 29.1931 3.37069 26.3839C2.24897 29.1455 1.73037 31.9872 2.12556 34.9427ZM13.8547 21.9561C14.8806 21.2107 15.1469 19.7244 14.4381 18.78C14.2437 18.521 14.0572 18.4392 13.731 18.5784C12.7918 18.9798 11.9757 19.5581 11.2077 20.2197C11.0168 20.3837 11.0437 20.5282 11.1361 20.7217C11.3616 21.1944 11.6904 21.5827 12.079 21.9248C12.7388 22.5056 13.0054 22.5219 13.7473 22.0352C13.7843 22.0109 13.8189 21.9826 13.8547 21.9561ZM16.8872 49.6119C16.9636 49.3052 16.7023 49.049 16.7635 48.7181C17.0117 48.7419 17.0483 48.9454 17.1105 49.1092C17.9093 51.2092 18.6259 53.3325 19.0985 55.5391C19.517 57.4936 20.0161 59.4304 20.4785 61.3754C20.6065 61.9137 20.7231 62.4548 20.8601 62.9905C20.9016 63.1528 21.0671 63.2599 21.1388 63.4264C21.0186 62.8076 20.9399 62.177 20.771 61.5726C20.1771 59.4494 19.6917 57.3009 19.2185 55.1478C18.9027 53.7098 18.5161 52.2937 17.9751 50.9174C17.7229 50.2758 17.4328 49.6278 17.3247 48.8364C17.4449 49.0209 17.5412 49.121 17.5834 49.2409C18.0491 50.5652 18.7342 51.8077 19.0538 53.1855C19.2961 54.23 19.4966 55.2842 19.7381 56.3288C20.0879 57.8415 20.5184 59.3378 20.799 60.8634C20.996 61.9348 21.4663 62.9477 21.4567 64.0865C21.3771 64.0249 21.3138 63.9361 21.2486 63.9354C21.1618 63.9339 21.1711 64.0494 21.1734 64.1135C21.1962 64.7325 21.1984 64.7327 20.6484 64.5309C20.6328 64.9406 20.6328 64.9406 20.9986 64.7473C21.0649 64.8917 20.9486 64.9421 20.8626 64.9652C20.4433 65.0771 20.3407 65.5809 19.9338 65.7022C19.8298 65.7333 19.9088 65.7746 19.9144 65.8253C19.965 66.2907 19.5251 66.8244 19.0692 66.8543C18.9844 66.8597 18.8884 66.8473 18.814 66.811C18.6066 66.7097 18.4137 66.5235 18.2748 66.9123C18.2294 67.0401 18.0455 66.9872 17.9116 66.953C17.1056 66.7462 16.5353 66.1565 15.8719 65.7207C15.1348 65.2365 14.4189 64.7207 13.69 64.2242C11.7744 62.9197 9.87552 61.5918 8.02516 60.1965C6.59211 59.1159 5.15405 58.042 3.79352 56.8706C3.47087 56.5927 3.17236 56.3049 3.38689 55.8162C3.41066 55.7624 3.4475 55.6595 3.45728 55.662C3.80961 55.7482 3.89817 55.4169 4.11089 55.2858C4.58879 54.9908 5.182 54.8941 5.72125 55.0083C6.29538 55.1298 6.85569 55.3668 7.35482 55.6986C7.6711 55.9087 8.0174 56.0692 8.34028 56.2691C8.59731 56.4282 8.9059 56.5512 9.16049 56.7231C9.59997 57.0196 10.1263 57.1332 10.5595 57.4489C10.7669 57.6001 10.9714 57.825 11.2698 57.8416C11.3083 57.7269 11.2353 57.6626 11.1847 57.5949C9.53278 55.3893 7.99284 53.1077 6.53265 50.7706C3.95835 46.6502 2.033 42.2796 1.23238 37.4355C0.354473 32.1241 1.31455 27.1527 3.9617 22.4594C4.55476 21.4082 5.32018 20.4817 6.13527 19.5956C6.26653 19.4528 6.33364 19.316 6.30636 19.1202C5.94068 16.5008 6.34743 13.9748 7.3489 11.5312C8.61379 8.44527 10.5334 5.83828 13.1405 3.72698C14.3701 2.73123 15.6727 1.87671 17.1353 1.26818C18.2806 0.791372 19.4256 0.612266 20.6269 1.0467C21.0259 1.19106 21.2288 1.51839 21.524 1.75826C21.5873 1.8099 21.5225 1.87073 21.4819 1.89907C21.2773 2.04234 21.1552 2.28259 20.9013 2.3696C19.7256 2.77347 18.7577 3.54873 17.6976 4.16165C16.8668 4.64221 16.284 5.39006 15.5535 5.97396C14.0454 7.17915 13.0093 8.75532 12.085 10.4077C11.1178 12.1365 10.5439 13.9918 10.3886 15.9651C10.3761 16.1268 10.3512 16.2876 10.3263 16.4955C10.6109 16.3902 10.873 16.2693 11.1475 16.1958C13.4941 15.5662 15.7506 15.7197 17.892 16.9019C18.3795 17.1711 18.8583 17.5388 19.0372 18.0006C19.1664 18.3352 19.5441 18.4291 19.5694 18.8385C19.5941 19.24 19.6846 19.6466 19.6876 20.0567C19.6905 20.4739 19.5567 20.8718 19.45 21.269C19.3425 21.6699 19.1649 22.0473 18.9107 22.3846C18.6621 22.7138 18.4216 23.0397 18.1037 23.3212C17.1216 24.191 15.9132 24.46 14.6933 24.7136C12.5327 25.1625 10.5819 24.6778 8.8163 23.423C8.536 23.2237 8.40751 23.33 8.26895 23.5719C7.35833 25.1611 6.70463 26.848 6.22522 28.6099C5.33361 31.8872 5.64932 35.1211 6.44973 38.3353C7.19962 41.3469 8.46458 44.1398 10.044 46.8004C11.3362 48.977 12.7471 51.0719 14.2762 53.1861C14.3893 52.5698 14.2821 52.0248 14.2526 51.4824C14.2236 50.9515 14.1542 50.4231 14.2501 49.892C14.2794 49.729 14.319 49.5357 14.5131 49.5261C14.7213 49.5159 14.7225 49.7178 14.7716 49.8736C15.1438 51.0543 15.1678 52.2928 15.3579 53.5032C15.431 53.9687 15.5279 54.4302 15.6224 54.8918C15.6673 55.1117 15.7702 55.3054 16.007 55.5286C15.8813 54.7821 15.7811 54.114 15.6548 53.4511C15.4065 52.1477 15.2837 50.826 15.0973 49.5134C15.0852 49.4269 15.0877 49.3353 15.0997 49.2482C15.1213 49.0912 15.2587 49.0323 15.3796 48.993C15.5448 48.9396 15.5752 49.0974 15.6054 49.2009C15.6485 49.3488 15.6866 49.4836 15.871 49.4994C15.9455 49.3797 15.8707 49.2725 15.8547 49.161C15.8284 48.976 15.8198 48.7834 16.0631 48.7467C16.2627 48.7168 16.4873 48.671 16.5972 48.9285C16.6951 49.1577 16.7984 49.3847 16.8998 49.6127C17.1872 51.0255 17.7881 52.3428 18.0987 53.7485C17.9787 52.5551 17.5448 51.4493 17.2032 50.3185C17.1294 50.074 17.1204 49.7886 16.8872 49.6119Z"
                  fill="#237b54"
                />
              </svg>
              <a class="register-button d-flex justify-content-center align-items-center">
                <span class="m-2 fw-bold text-dark">ENROLL NOW</span>
              </a>
            </div>
          </div>
        </div>
        <div class="section-learn">
          <div class="container-fluid">
            <div class="container-xl">
              <div class="learn-content-wrapper">
                <div
                  ref={(el) => (popUpRefs.current[5] = el)}
                  class="heading-wrapper mb-4 pop-up"
                >
                  <div class="d-flex justify-content-center align-items-center flex-column">
                    <div class="display-5 fw-bold w-50 text-center">
                      {" "}
                      {header16}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="301"
                      height="14"
                      viewBox="0 0 301 14"
                      fill="none"
                    >
                      <path
                        d="M65.8862 2.80937C94.364 2.40435 122.856 2.14398 151.348 2.02826C179.839 1.91254 208.066 1.95112 236.416 2.13434C252.52 2.24042 268.64 2.38507 284.744 2.57793L286.943 0.601051C250.173 0.996427 213.417 1.48824 176.66 2.07648C139.904 2.66472 103.147 3.3494 66.3887 4.14015C45.7541 4.58375 25.1349 5.04663 4.49985 5.54808C3.29059 5.57701 1.47568 5.76988 0.788687 6.50277C0.148519 7.18745 1.32417 7.54425 2.30085 7.52496C40.6076 6.91743 78.9415 6.85957 117.256 7.36103C155.571 7.86248 193.851 8.93289 232.08 10.553C253.558 11.4594 275.02 12.5491 296.449 13.8124C297.611 13.8799 299.535 13.5231 300.16 12.8577C300.847 12.1345 299.578 11.8837 298.648 11.8355C260.515 9.58864 222.286 7.89141 184.022 6.7535C145.759 5.61558 107.429 5.04663 69.1108 5.03698C47.5802 5.03698 26.0484 5.20092 4.51535 5.54808L2.31635 7.52496C39.0594 6.62813 75.8173 5.83738 112.575 5.13342C149.332 4.4391 186.088 3.83157 222.844 3.33011C243.478 3.05046 264.127 2.79009 284.76 2.56829C285.969 2.55865 287.8 2.33685 288.471 1.6136C289.142 0.890351 287.92 0.601051 286.959 0.591407C258.455 0.263534 229.981 0.0610241 201.491 0.0128074C173.001 -0.0354093 144.773 0.0513807 116.421 0.292464C100.314 0.427471 84.1921 0.610694 68.0852 0.842134C66.876 0.861421 65.0454 1.07357 64.374 1.79682C63.7338 2.4815 64.9095 2.8383 65.8862 2.81902L65.8862 2.80937Z"
                        fill="#ffc107"
                      />
                    </svg>
                  </div>
                </div>
                <div class="learn-card-wrapper" id="scroll-section">
                  <div className="div-block-28">
                    {/* <div className="div-block-29" style={{ height:"100%", background: '#237b54', width: '3px', position: 'absolute', top: 0, left: '50%' }}></div> */}
                    <motion.div
                      className="progress-bar"
                      animate={controls}
                      initial={{ height: "0%" }}
                      style={{ backgroundColor: "#237b54", width: "100%" }}
                    />
                    {/* Your milestone circles */}
                    {[...Array(11).keys()].map((i) => (
                      <div key={i} className={`div-block-26  _${i + 1}`}>
                        <div
                          className={`div-block-67 _${i + 1}`}
                          style={{ backgroundColor: "#237b54" }}
                        ></div>
                      </div>
                    ))}
                    {[...Array(11).keys()].map((i) => (
                      <div key={i} className={`div-block-27  _${i + 1}`}>
                        <div
                          className={`div-block-67 _${i + 1}`}
                          style={{ backgroundColor: "#237b54" }}
                        ></div>
                      </div>
                    ))}
                    {[...Array(11).keys()].map((i) => (
                      <div key={i} className={`div-block-30  _${i + 1}`}>
                        <div
                          className={`div-block-67 _${i + 1}`}
                          style={{ backgroundColor: "#237b54" }}
                        ></div>
                      </div>
                    ))}
                    {[...Array(11).keys()].map((i) => (
                      <div key={i} className={`div-block-31  _${i + 1}`}>
                        <div
                          className={`div-block-67 _${i + 1}`}
                          style={{ backgroundColor: "#237b54" }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div
                    ref={(el) => (popUpRefs.current[6] = el)}
                    class="learning-card pop-up"
                  >
                    <div class="card_image d-flex justify-content-end">
                      <img
                        src={card1img}
                        class="img-fluid rounded-top"
                        alt=""
                      />
                    </div>
                    <div class="learn-card-content-wrapper">
                      <div class="learn-card-content d-flex justify-content-center align-items-start flex-column gap-2">
                        {/* <div class="time h5 text-muted">00 mins - 10 mins</div> */}
                        <div class="learn-card-heading h5 fw-bold">
                          {header17}
                        </div>
                        <div class="learn-card-para h5 fw-normal">
                          {subheader8}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    ref={(el) => (popUpRefs.current[7] = el)}
                    class="learning-card-rev pop-up"
                  >
                    <div class="d-flex justify-content-end">
                      <div class="learn-card-content-wrapper">
                        <div class="learn-card-content d-flex justify-content-center align-items-start flex-column gap-2">
                          {/* <div class="time h5 text-muted">
                            00 mins - 10 mins
                          </div> */}
                          <div class="learn-card-heading h5 fw-bold">
                            {header18}
                          </div>
                          <div class="learn-card-para h5 fw-normal">
                            {subheader9}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card_image">
                      <img
                        src={card2img}
                        class="img-fluid rounded-top"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    ref={(el) => (popUpRefs.current[8] = el)}
                    class="learning-card pop-up"
                  >
                    <div class="card_image d-flex justify-content-end">
                      <img
                        src={card3img}
                        class="img-fluid rounded-top"
                        alt=""
                      />
                    </div>
                    <div class="learn-card-content-wrapper">
                      <div class="learn-card-content d-flex justify-content-center align-items-start flex-column gap-2">
                        {/* <div class="time h5 text-muted">00 mins - 10 mins</div> */}
                        <div class="learn-card-heading h5 fw-bold">
                          {header19}
                        </div>
                        <div class="learn-card-para h5 fw-normal">
                          {subheader10}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    ref={(el) => (popUpRefs.current[9] = el)}
                    class="learning-card-rev pop-up"
                  >
                    <div class="d-flex justify-content-end">
                      <div class="learn-card-content-wrapper">
                        <div class="learn-card-content d-flex justify-content-center align-items-start flex-column gap-2">
                          {/* <div class="time h5 text-muted">
                            00 mins - 10 mins
                          </div> */}
                          <div class="learn-card-heading h5 fw-bold">
                            {header20}
                          </div>
                          <div class="learn-card-para h5 fw-normal">
                            {subheader11}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card_image d-flex justify-content-start">
                      <img
                        src={card4img}
                        class="img-fluid rounded-top"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="masterclass-for">
          <div class="container-fluid">
            <div class="container-xl">
              <div class="row justify-content-center align-items-center g-2 flex-column">
                <div class="col">
                  <div class="heading-wrapper">
                    <div ref={(el) => popUpRefs.current[10] = el} class="d-flex justify-content-center align-items-center flex-column pop-up">
                      <div class="display-5 fw-bold text-center">
                        Who is this masterclass for?
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="301"
                        height="14"
                        viewBox="0 0 301 14"
                        fill="none"
                      >
                        <path
                          d="M65.8862 2.80937C94.364 2.40435 122.856 2.14398 151.348 2.02826C179.839 1.91254 208.066 1.95112 236.416 2.13434C252.52 2.24042 268.64 2.38507 284.744 2.57793L286.943 0.601051C250.173 0.996427 213.417 1.48824 176.66 2.07648C139.904 2.66472 103.147 3.3494 66.3887 4.14015C45.7541 4.58375 25.1349 5.04663 4.49985 5.54808C3.29059 5.57701 1.47568 5.76988 0.788687 6.50277C0.148519 7.18745 1.32417 7.54425 2.30085 7.52496C40.6076 6.91743 78.9415 6.85957 117.256 7.36103C155.571 7.86248 193.851 8.93289 232.08 10.553C253.558 11.4594 275.02 12.5491 296.449 13.8124C297.611 13.8799 299.535 13.5231 300.16 12.8577C300.847 12.1345 299.578 11.8837 298.648 11.8355C260.515 9.58864 222.286 7.89141 184.022 6.7535C145.759 5.61558 107.429 5.04663 69.1108 5.03698C47.5802 5.03698 26.0484 5.20092 4.51535 5.54808L2.31635 7.52496C39.0594 6.62813 75.8173 5.83738 112.575 5.13342C149.332 4.4391 186.088 3.83157 222.844 3.33011C243.478 3.05046 264.127 2.79009 284.76 2.56829C285.969 2.55865 287.8 2.33685 288.471 1.6136C289.142 0.890351 287.92 0.601051 286.959 0.591407C258.455 0.263534 229.981 0.0610241 201.491 0.0128074C173.001 -0.0354093 144.773 0.0513807 116.421 0.292464C100.314 0.427471 84.1921 0.610694 68.0852 0.842134C66.876 0.861421 65.0454 1.07357 64.374 1.79682C63.7338 2.4815 64.9095 2.8383 65.8862 2.81902L65.8862 2.80937Z"
                          fill="#ffc107"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div ref={(el) => popUpRefs.current[11] = el} class="col py-4 pop-up">
                  <div className="row g-4 align-items-stretch">
                    <div className="col-md-6 col-lg-4">
                      <div className="box-content-money">
                        <div className="content">
                          <img
                            className="icon"
                            src={reading}
                            alt="Confused"
                            style={{ width: "64px" }}
                          />
                          <div className="text-content">
                            <div className="title h4 fw-bold">
                              Students or a Working Professionals
                            </div>
                            <p className="description">
                              If you're considering relocating to Dubai but
                              uncertain about the country's conditions, this
                              masterclass is for you.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="box-content-money">
                        <div className="content">
                          <img
                            className="icon"
                            src={resident}
                            alt="Confused"
                            style={{ width: "64px" }}
                          />
                          <div className="text-content">
                            <div className="title h4 fw-bold">
                              Future Residents
                            </div>
                            <p className="description">
                              Planning to relocate to Dubai, either now or in
                              the future? Understand the immigration process and
                              set yourself up for a successful transition with
                              our expert advice.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="box-content-money">
                        <div className="content">
                          <img
                            className="icon"
                            src={confused}
                            alt="Confused"
                            style={{ width: "64px" }}
                          />
                          <div className="text-content">
                            <div className="title h4 fw-bold">
                              Destination Dilemma?
                            </div>
                            <p className="description">
                              Unsure which country is the perfect fit for you?
                              Join us to gain clarity on whether Dubai aligns
                              with your aspirations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div class="founder-meet" style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
          <div class="container-fluid">
            <div class="container-xl">
              <div class="row justify-content-center align-items-center g-2 flex-column">
                <div class="col">
                  <div
                    ref={(el) => (popUpRefs.current[12] = el)}
                    class="heading-wrapper pop-up"
                  >
                    {/* <div class="d-flex justify-content-center align-items-center flex-column">
                      <div class="display-5 fw-bold text-center">{header21}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="301"
                        height="14"
                        viewBox="0 0 301 14"
                        fill="none"
                      >
                        <path
                          d="M65.8862 2.80937C94.364 2.40435 122.856 2.14398 151.348 2.02826C179.839 1.91254 208.066 1.95112 236.416 2.13434C252.52 2.24042 268.64 2.38507 284.744 2.57793L286.943 0.601051C250.173 0.996427 213.417 1.48824 176.66 2.07648C139.904 2.66472 103.147 3.3494 66.3887 4.14015C45.7541 4.58375 25.1349 5.04663 4.49985 5.54808C3.29059 5.57701 1.47568 5.76988 0.788687 6.50277C0.148519 7.18745 1.32417 7.54425 2.30085 7.52496C40.6076 6.91743 78.9415 6.85957 117.256 7.36103C155.571 7.86248 193.851 8.93289 232.08 10.553C253.558 11.4594 275.02 12.5491 296.449 13.8124C297.611 13.8799 299.535 13.5231 300.16 12.8577C300.847 12.1345 299.578 11.8837 298.648 11.8355C260.515 9.58864 222.286 7.89141 184.022 6.7535C145.759 5.61558 107.429 5.04663 69.1108 5.03698C47.5802 5.03698 26.0484 5.20092 4.51535 5.54808L2.31635 7.52496C39.0594 6.62813 75.8173 5.83738 112.575 5.13342C149.332 4.4391 186.088 3.83157 222.844 3.33011C243.478 3.05046 264.127 2.79009 284.76 2.56829C285.969 2.55865 287.8 2.33685 288.471 1.6136C289.142 0.890351 287.92 0.601051 286.959 0.591407C258.455 0.263534 229.981 0.0610241 201.491 0.0128074C173.001 -0.0354093 144.773 0.0513807 116.421 0.292464C100.314 0.427471 84.1921 0.610694 68.0852 0.842134C66.876 0.861421 65.0454 1.07357 64.374 1.79682C63.7338 2.4815 64.9095 2.8383 65.8862 2.81902L65.8862 2.80937Z"
                          fill="#ffc107"
                        />
                      </svg>
                    </div> */}
                  </div>
                </div>
                <div
                  ref={(el) => (popUpRefs.current[13] = el)}
                  class="col py-4 pop-up"
                >
                  <Founder />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="exclusive-bonus" style={{ backgroundColor: "#ebf1ff" }}>
          <div class="container-fluid">
            <div class="container-xl">
              <div class="row justify-content-center align-items-center g-2 flex-column">
                <div class="col">
                  <div class="heading-wrapper">
                    <div class="d-flex justify-content-center align-items-center flex-column">
                      <div class="display-5 fw-bold text-center">
                        {header22}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="301"
                        height="14"
                        viewBox="0 0 301 14"
                        fill="none"
                      >
                        <path
                          d="M65.8862 2.80937C94.364 2.40435 122.856 2.14398 151.348 2.02826C179.839 1.91254 208.066 1.95112 236.416 2.13434C252.52 2.24042 268.64 2.38507 284.744 2.57793L286.943 0.601051C250.173 0.996427 213.417 1.48824 176.66 2.07648C139.904 2.66472 103.147 3.3494 66.3887 4.14015C45.7541 4.58375 25.1349 5.04663 4.49985 5.54808C3.29059 5.57701 1.47568 5.76988 0.788687 6.50277C0.148519 7.18745 1.32417 7.54425 2.30085 7.52496C40.6076 6.91743 78.9415 6.85957 117.256 7.36103C155.571 7.86248 193.851 8.93289 232.08 10.553C253.558 11.4594 275.02 12.5491 296.449 13.8124C297.611 13.8799 299.535 13.5231 300.16 12.8577C300.847 12.1345 299.578 11.8837 298.648 11.8355C260.515 9.58864 222.286 7.89141 184.022 6.7535C145.759 5.61558 107.429 5.04663 69.1108 5.03698C47.5802 5.03698 26.0484 5.20092 4.51535 5.54808L2.31635 7.52496C39.0594 6.62813 75.8173 5.83738 112.575 5.13342C149.332 4.4391 186.088 3.83157 222.844 3.33011C243.478 3.05046 264.127 2.79009 284.76 2.56829C285.969 2.55865 287.8 2.33685 288.471 1.6136C289.142 0.890351 287.92 0.601051 286.959 0.591407C258.455 0.263534 229.981 0.0610241 201.491 0.0128074C173.001 -0.0354093 144.773 0.0513807 116.421 0.292464C100.314 0.427471 84.1921 0.610694 68.0852 0.842134C66.876 0.861421 65.0454 1.07357 64.374 1.79682C63.7338 2.4815 64.9095 2.8383 65.8862 2.81902L65.8862 2.80937Z"
                          fill="#ffc107"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="col py-4 d-flex justify-content-center align-items-center">
                  <div class="h3 text-center w-75">
                   {subheader12}<br/>
                   <div class="h4 fst-italic">{subheader13}</div>
                   
                  </div>
                </div>
                <div class="col d-flex justify-content-center align-items-center">
                  <div class="hero-button-wrapper">
                    <a href={Enroll_link} class="register-button d-flex justify-content-center align-items-center">
                      <span class="h4 m-2 fw-bold">ENROLL NOW</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="faq">
          <div class="col">
            <div class="heading-wrapper">
              <div class="d-flex justify-content-center align-items-center flex-column py-5">
                <div
                  ref={(el) => (popUpRefs.current[14] = el)}
                  class="display-5 fw-bold text-center pop-up"
                >
                  {header23}
                </div>
              </div>
            </div>
          </div>
          <div
            class="container-fluid bg-light"
            style={{ paddingBottom: "4rem" }}
          >
            <div className={classes.wrapper}>
              <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Image src={image} alt="Frequently Asked Questions" />
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Title order={2} ta="left" className={classes.title_fq}>
                      Frequently Asked Questions
                    </Title>

                    <Accordion
                      chevronPosition="right"
                      defaultValue="reset-password"
                      variant="separated"
                    >
                      <Accordion.Item
                        className={classes.item}
                        value="reset-password"
                      >
                        <Accordion.Control>
                          {question1}
                        </Accordion.Control>
                        <Accordion.Panel>{answer1}</Accordion.Panel>
                      </Accordion.Item>

                      <Accordion.Item
                        className={classes.item}
                        value="another-account"
                      >
                        <Accordion.Control>
                        {question2}
                        </Accordion.Control>
                        <Accordion.Panel>{answer2}</Accordion.Panel>
                      </Accordion.Item>

                      <Accordion.Item
                        className={classes.item}
                        value="newsletter"
                      >
                        <Accordion.Control>
                        {question3}
                        </Accordion.Control>
                        <Accordion.Panel>{answer3}</Accordion.Panel>
                      </Accordion.Item>

                      <Accordion.Item
                        className={classes.item}
                        value="credit-card"
                      >
                        <Accordion.Control>
                        {question4}
                        </Accordion.Control>
                        <Accordion.Panel>{answer4}</Accordion.Panel>
                      </Accordion.Item>
                      <Accordion.Item className={classes.item} value="credit">
                        <Accordion.Control>
                        {question5}
                        </Accordion.Control>
                        <Accordion.Panel>{answer5}</Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                  </Grid.Col>
                </Grid>
              </Container>
            </div>
          </div>
        </div>
        <div className="bottom-banner">
          <div className="banner-content-bottom">
            <img
              className="banner-image"
              src={demodp}
              alt="Banner"
              style={{ width: "350px" }}
            />
            <div className="banner-info">
              <div className="price">
                {price} <span className="original-price">{msrp}</span>
              </div>
              <div className="date">{date}{time} </div>
            </div>
          </div>
          <div class="hero-button-wrapper">
            <a class="register-button d-flex justify-content-center align-items-center">
              <span class="m-2 fw-bold text-dark">ENROLL NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
// ₹1,999
export default Course;
