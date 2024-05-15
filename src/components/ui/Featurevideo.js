import React from "react";
import ReactPlayer from "react-player/youtube";

const Featurevideo = () => {
  return (
    <div class="container-fluid py-4">
      <div class="container ">
        <div class="row justify-content-center align-items-center flex-row g-2">
          <div class="col-lg-6 col-sm-12">
            <div class="h2 text-light fw-bold d-flex justify-content-center"> <span class="border-1 p-2 rounded text-center">FEATURED VIDEO OF THE MONTH</span></div>
          </div>
          <div class="col-lg-6 col-sm-12 player-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=8TIeWI8V1nI"
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
