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
          padding: "70px 0px",
          color: "black",
          background: "linear-gradient(151deg, rgb(5, 13, 34) 60%, rgb(35, 123, 84) 100%)",
          paddingBottom: "100px"
        }}
        id="testimonialID"
      > 
      <div class="col d-flex justify-content-center align-items-center flex-column gap-4">
              <div class="col">
                <div class="h2 fw-bold text-light" style={{border:"1px solid white", padding:"20px", borderRadius:"10px"}}>Hear from our Clients</div>
              </div>
              <div class="col-10 w-75">
                <p class="text-center text-light ">
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
