import React from "react";
import glowrocket from "../../assests/images/glowrocket.png";

const Verticalstepper = (props) => {
  const {
    header,
    subhead,
    stepheader,
    step1,
    point1,
    step2,
    point2,
    point3,
    point4,
    step3,
    point5,
    step4,
    point6,
    step5,
    point7,
    point8,
    step6,
    point9,
    point10,
    step7,
    point11,
  } = props.data[1];
  return (
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center gap-2 flex-column mid">
        <div class="d-flex justify-content-center align-items-center gap-2">
          <div class=" d-flex justify-content-start">
            <div class="">
              <img
                src={glowrocket}
                class="img-fluid rounded-top"
                alt="rocket"
              />
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center flex-column">
            <div class="col h1 fw-bold text-center ">{header}</div>
            <p class="text-center h6">{subhead}</p>
          </div>
        </div>
        <div class="stepper d-flex flex-column mt-5 ml-2">
          <div class="h6 py-3">
            Get and overview of how Our Job support Service Works
          </div>
          <div class="d-flex mb-1">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                1
              </div>
              <div class="line h-100"></div>
            </div>
            <div class="px-2">
              <div class="h6">{step1}</div>
              <li class="h6 fw-normal  pb-3">{point1}</li>
            </div>
          </div>
          <div class="d-flex mb-1">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                2
              </div>
              <div class="line h-100"></div>
            </div>
            <div class="px-2">
              <div class="h6">{step2}</div>
              <li class="h6 fw-normal  pb-3">{point2}</li>
              <li class="h6 fw-normal  pb-3">{point3}</li>
              <li class="h6 fw-normal  pb-3">{point4}</li>
            </div>
          </div>
          <div class="d-flex mb-1">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                3
              </div>
              <div class="line h-100"></div>
            </div>
            <div class="px-2">
              <div class="h6">{step3}</div>
              <li class="h6 fw-normal  pb-3">{point5}</li>
            </div>
          </div>
          <div class="d-flex mb-1">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                4
              </div>
              <div class="line h-100"></div>
            </div>
            <div class="px-2">
              <div class="h6">{step4}</div>
              <li class="h6 fw-normal  pb-3">{point6}</li>
            </div>
          </div>
          <div class="d-flex mb-1">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                5
              </div>
              <div class="line h-100"></div>
            </div>
            <div class="px-2">
              <div class="h6">{step5}</div>
              <li class="h6 fw-normal  pb-3">{point7}</li>
              <li class="h6 fw-normal  pb-3">{point8}</li>
            </div>
          </div>
          <div class="d-flex mb-1">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                6
              </div>
              <div class="line h-100"></div>
            </div>
            <div class="px-2">
              <div class="h6">{step6}</div>
              <li class="h6 fw-normal  pb-3">{point9}</li>
              <li class="h6 fw-normal  pb-3">{point10}</li>
            </div>
          </div>
          <div class="d-flex mb-1">
            <div class="d-flex flex-column pr-4 align-items-center">
              <div class="rounded-circle py-2 px-3 stepper-col text-white mb-1">
                7
              </div>
              <div class="line h-100"></div>
            </div>
            <div class="px-2">
              <div class="h6">{step7}</div>
              <li class="h6 fw-normal  pb-3">{point11}</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verticalstepper;
