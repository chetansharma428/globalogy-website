import React from "react";
import ReactPlayer from "react-player/youtube";
import rightarrow from "../../assests/images/right-arrow.png"

const Featurevideo = () => {
  return (
    <div class="container-fluid py-4">
      <div class="container ">
        <div class="row justify-content-center align-items-center flex-row g-2">
          <div class="col-lg-6 col-sm-12">
            <div class="h3 text-light fw-bold d-flex justify-content-center"> <span class="border-1 p-2 rounded text-center">WHICH COUNTRY ARE WE TALKING ABOUT?</span></div>
            <div class="d-flex justify-content-center align-items-center gap-2"><div><img
              src={rightarrow}
              class="img-fluid rounded-top"
              alt=""
              style={{width:"64px", height:"64px"}}
            />
            </div>
            <div class="h3 text-light text-center">Dubai ( The DBA Program )</div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12 player-wrapper">
            <ReactPlayer
              url="https://youtu.be/cgmpoBwQs3U"
              frameBorder="1"
              playing="true"
              controls="true"
              muted="true"
              autoplay="true"
              allowFullScreen="true"
              title="video"
              class="video-player"
              width="-webkit-fill-available"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurevideo;
