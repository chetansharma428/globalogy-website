import React from "react";
import arrow from "../assests/images/Vector.svg";

const Support = (props) => {
  const {
    header,
    subhead1,
    subhead2,
    subheaderbutton,
    dp,
    users,
    insta,
    studentnum,
    box1header,
    box1subhead,
    box2header,
    box2subhead,
    box3header,
    box3subhead,
    box4header,
    box4subhead,
    li1,
    li2,
    li3,
    li4,
  } = props.data[0];
  return (
    <div>
      <div class="container justify-content-center p-4 text-light">
        <div class="row d-flex g-2">
          <div class="col d-flex align-items-center">
            <div class="col-sm-12 col d-flex justify-content-center align-items-start g-2 flex-column">
              <div class="col">
                <h1 class="display-4 head-txt fw-bold">{header}</h1>
              </div>
              <div class="col">
                <h5 class="h6 head-txt">
                  {subhead1} <br />
                  {subhead2}
                </h5>
                <div>
                  <div class="h6 head-txt">
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                    <li>{li4}</li>
                  </div>
                </div>
              </div>
              <div class="col d-flex justify-content-start gap-2 w-100 py-4">
                <button
                  class="wherecanmove btn d-flex flew-row align-items-center"
                >
                  <a>{subheaderbutton}</a>
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
          <div class="banner col-sm-12 col-lg-4 d-flex justify-content-center align-items-center g-2">
            <img src={dp} class="img-fluid" alt="Nidhi Nagori" />
          </div>
        </div>
      </div>
      <div class="container flex-row p-2">
        <div class="row d-flex justify-content-center align-items-center g-2">
          <div class=" col d-flex justify-content-center align-items-center ">
            <div class="happy-stn d-flex align-items-center justify-content-center p-2 gap-2">
              <div>
                <img src={users} class="img-fluid rounded-top" alt="" />
              </div>
              <div>
                <p class="h6">{studentnum}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center align-items-center flex-wrap  gap-4 py-4">
            <div class="box d-flex align-items-center flex-column gap-2 p-4 rounded ">
              <div class="col d-flex flex-row align-items-center gap-1">
                <h1 class="fw-bold">{box1header}</h1>
              </div>
              <div class="col h6">
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow"
                >
                  {box1subhead}
                </a>
              </div>
            </div>
            <div class="box d-flex align-items-center flex-column gap-2 p-4 rounded ">
              <div class="col d-flex flex-row align-items-center gap-2">
                <h1 class="fw-bold">{box2header}</h1>
              </div>
              <div class="col h6">
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow"
                >
                  {box2subhead}
                </a>
              </div>
            </div>
            <div class="box d-flex align-items-center flex-column gap-2 p-3 rounded ">
              <div class="col d-flex flex-row align-items-center gap-2">
                <h1 class="fw-bold">{box3header}</h1>
                <img src={insta} />
              </div>
              <div class="col h6">
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow"
                >
                  {box3subhead}
                </a>
              </div>
            </div>
            <div class="box d-flex align-items-center flex-column gap-2 p-3 rounded ">
              <div class="col d-flex flex-row align-items-center ">
                <h1 class="fw-bold">{box4header}</h1>
              </div>
              <div class="col h6">
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow"
                >
                  {box4subhead}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
