import React from 'react'
import suit from '../assests/images/suit.svg'
import rocket from '../assests/images/rocket.svg'
import badge from '../assests/images/badge.svg'
import arrow from '../assests/images/arrow.svg'


const Featuressection = () => {
  return (
    <div class="container">
      <div
        class="row d-flex flex-wrap align-items-center g-2 gap-4 py-4"
      >
        <div class="mid col-lg-6 col-sm-12  border rounded position-relative">
          <div class="corner-content top-left">
            <img
              src={rocket}
              class="img-fluid rounded-top"
              alt=""
            />

          </div>
          <div
            class="row justify-content-center align-items-center g-2 d-flex flex-column gap-2"
          >
            <div class="col">
              <div
                class="row justify-content-center align-items-center g-2 d-flex flex-column border-bottom"
              >
                <div class="col icon">
                  <img
                    src={suit}
                    class="img-fluid "
                    alt=""
                  />
                </div>
                <div class="col">
                  <div class="h5">Apply: Build, Play, Create</div>
                </div>
                <div class="col fw-bold text-muted">
                  <div class="h6">Bring ideas to life in CodeHelp's Apply. Build projects, play in boot playgrounds—all in your browser.</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="row justify-content-center align-items-center g-2 d-flex flex-column"
              >
                <div class="col icon">
                  <img
                    src={rocket}
                    class="img-fluid "
                    alt=""
                  />
                </div>
                <div class="col">
                  <div class="h5">Grow: Elevate Your Career</div>
                </div>
                <div class="col fw-bold text-muted">
                  <div class="h6">Climb with Globalogy’s mentorship and achieve career success.</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="row justify-content-center align-items-center g-2 d-flex flex-column"
              >
                <div class="col icon">
                  <div class="h5">Why We're Your</div>
                </div>
                <div class="col">
                  <div class="h4">Best Global Carrier Learning Choice?</div>
                </div>
                <div class="col fw-bold text-muted">
                  <div class="h6">Choose Globalogy for an seemless Experience.</div>
                </div>
                <div class="col">
                  <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    href="#"
                    role="button"
                  >Let's Connect</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mid col  border rounded position-relative">
          <div
            class="row justify-content-center align-items-center g-2 d-flex flex-column gap-4"
          >
            <div class="corner-content top-right">
            <img
              src={arrow}
              class="img-fluid rounded-top"
              alt=""
            />

          </div>
            <div class="col">
              <div
                class="row justify-content-center align-items-center g-2 d-flex flex-column "
              >
                <div class="col icon">
                  <img
                    src={badge}
                    class="img-fluid "
                    alt=""
                  />
                </div>
                <div class="col">
                  <div class="h5">Community Learning Experience</div>
                </div>
                <div class="col fw-bold text-muted">
                  <div class="h6">Emphasize that you connect with very advanced likely minded people to ensure high-quality, up-to-date content.</div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                class="row justify-content-center align-items-center g-2 d-flex flex-column"
              >
                <div class="col icon">
                  <div class="h5">Who are We</div>
                </div>
                <div class="col">
                  <div class="h4">Empowering People, Enabling Dreams</div>
                </div>
                <div class="col fw-bold text-muted">
                  <div class="h6">Unveil the essence of Globalogy: a community-driven platform dedicated to empowering people of all levels. Discover who we are and how we're shaping the future of abroad journey.</div>
                </div>
                <div class="col">
                  <a
                    name=""
                    id=""
                    class="btn btn-primary"
                    href="#"
                    role="button"
                  >Let's Connect</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featuressection