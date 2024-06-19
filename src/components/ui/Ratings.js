import React from "react";
import social from "../../assests/images/social-media.png";

const Ratings = () => {
  return (
    <div class="container-fluid pattern">
      <div class="container">
        <div class="row stat-content mb-4">
          <div class="col-lg-3 col-sm-12 rating-box">
            <div class="row ">
              <div class="col d-flex justify-content-start align-items-center flex-row gap-2">
                <svg
                  width="48"
                  height="46"
                  viewBox="0 0 48 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.0005 17.6214H29.6708L24.0091 0.17627L18.3297 17.6214L0 17.6037L14.8443 28.3963L9.16487 45.8237L24.0091 35.0488L38.8357 45.8237L33.174 28.3963L48.0005 17.6214Z"
                    fill="#00B67A"
                  ></path>
                  <path
                    d="M34.4466 32.342L33.1727 28.3965L24.0078 35.049L34.4466 32.342Z"
                    fill="#005128"
                  ></path>
                </svg>
                <div>
                  <p class="text-muted">Featured In</p>
                  <div class="h5 fw-bold d-flex justify-content-center align-items-center">
                    World's first Ed-Tech company to be featured on Times Square
                    ✨
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 rating-box">
            <div class="row  ">
              <div class="col d-flex justify-content-start align-items-center flex-row gap-2">
                <img
                  src={social}
                  class="img-fluid rounded-top"
                  style={{ width: "46px", height: "48px" }}
                  alt=""
                />
                <div>
                  <p class="text-muted">Followers</p>
                  <div class="h5 fw-bold d-flex justify-content-center align-items-center">200K+ followers on Social Media</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12 rating-box">
            <div class="row ">
              <div class="col d-flex justify-content-start align-items-center flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#fbc02d"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#e53935"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4caf50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1565c0"
                    d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                <div>
                  <p class="text-muted">Google Reviews</p>
                  <div class="h5 fw-bold">Rated 4.6/5 (220+)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row stat-bottom-content">
          <div class="rating-box-bottom">
            <div class="row d-flex justify-content-center align-items-center g-2">
              <div class="col d-flex justify-content-center align-items-center flex-column gap-2">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/000000/customer-insight.png"
                  alt="customer-insight"
                />
                <p class=" h2 fw-bold">2500+</p>
                <div class="h5 fw-bold text-center">Candidates benefited from our courses.</div>
              </div>
            </div>
          </div>
          <div class="rating-box-bottom">
            <div class="row d-flex justify-content-center align-items-center g-2">
              <div class="col d-flex justify-content-center align-items-center flex-column gap-2">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/conference-call--v1.png"
                  alt="conference-call--v1"
                />
                <p class=" h2 fw-bold">70%</p>
                <div class="h5 fw-bold text-center">Interviews scheduled from global recruiters</div>
              </div>
            </div>
          </div>
          <div class="rating-box-bottom">
            <div class="row d-flex justify-content-center align-items-center g-2">
              <div class="col d-flex justify-content-center align-items-center flex-column gap-2">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/group-task.png"
                  alt="group-task"
                />
                <p class=" h2 fw-bold">1300+</p>
                <div class="h5 fw-bold text-center">Have moved abroad with our help</div>
              </div>
            </div>
          </div>
          <div class="rating-box-bottom">
            <div class="row d-flex justify-content-center align-items-center g-2">
              <div class="col d-flex justify-content-center align-items-center flex-column gap-2">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/group-task.png"
                  alt="group-task"
                />
                <p class=" h2 fw-bold">1000+</p>
                <div class="h5 fw-bold text-center">Personal sessions and multiple lives impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
