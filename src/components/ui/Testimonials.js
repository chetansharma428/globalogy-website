import  {React } from "react";

// import {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   Autoplay,
//   EffectFade,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/scrollbar";


import Sliders from "./Sliders";

const Testimonials = () => {
  
  return (
    <div>
      <div
        class="container-fluid bg-light"
        style={{
          padding: "50px 0px",
          color: "black",
          background: "linear-gradient(176deg, #050d22 0%, #237b54 100%)",
        }}
        id="testimonialID"
      > 
      <div class="col d-flex justify-content-center align-items-center flex-column">
              <div class="col">
                <div class="h2 fw-bold text-light">Hear from our Clients</div>
              </div>
              <div class="col-10">
                <p class="text-center text-light">
                  Get inspired by real-life experiences of our clients who have
                  successfully initiated their journey of moving abroad with our
                  guidance & support. Explore their views & discover how we help
                  you achieve your goal of moving abroad.
                </p>
              </div>
            </div>
        <Sliders/>
      </div>
    </div>
  );
};

export default Testimonials;
