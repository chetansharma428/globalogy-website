import React from 'react'
import flag1 from '../assests/images/Flag_of_Argentina-512x320 1.png'
import flag2 from '../assests/images/Flag_of_Australia-512x256 1.png'
import flag3 from '../assests/images/Flag_of_Canada-512x256 1.png'
import flag4 from '../assests/images/Flag_of_England-512x307 1.png'
import dp from '../assests/images/banner-with-pic-removebg-preview 1.png'
import arrow from '../assests/images/Vector.svg'
import users from '../assests/images/user 1.png'
import insta from '../assests/images/3d_circle_with_instagram_symbol_isolated_on_a_transparent_background-removebg-preview 1.png'
import twitter from '../assests/images/glossy-round-black-white-twitter-logo-isolated-transparent-background_125540-3693-removebg-preview 1.png'
import yt from '../assests/images/m011t0447_h_social_sign_18sep22-removebg-preview 1.png'
import linkedin from '../assests/images/8379992-removebg-preview 1.png'

import { Heading5 } from 'lucide-react'
import { Button } from 'bootstrap'

const Herosection = () => {
    return (
        <div>
            <div class="container justify-content-center p-4">
                <div class="row d-flex">
                    <div class="col d-flex align-items-center">
                        <div
                            class="col-sm-12 col d-flex justify-content-center align-items-start g-2 flex-column"
                        >
                            <div class="col d-flex flex-row justify-items-center gap-2">
                                <img
                                    src={flag1}
                                    class="img-fluid rounded-top animate__animated animate__bounce animate__repeat-2 2"
                                    alt=""
                                />
                                <img
                                    src={flag2}
                                    class="img-fluid rounded-top animate__animated animate__bounce animate__repeat-2 2"
                                    alt=""
                                />
                                <img
                                    src={flag3}
                                    class="img-fluid rounded-top animate__animated animate__bounce animate__repeat-2 2"
                                    alt=""
                                />
                                <img
                                    src={flag4}
                                    class="img-fluid rounded-top animate__animated animate__bounce animate__repeat-2 2"
                                    alt=""
                                />

                            </div>
                            <div class="col">
                                <h1 class="h1 head-txt fw-bold">
                                    Go Global With Globalogy
                                </h1>
                            </div>
                            <div class="col">
                                <h5 class="h5 head-txt">
                                    Global Career, Better Salary, Life Abroad, and all things good <br />
                                    - we help YOU realize YOUR DREAMS. So, are you ready to level up, Buttercup?.
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div
                        class="banner col-sm-12 col-lg-4 d-flex justify-content-center align-items-center g-2"
                    >
                        <img
                            src={dp}
                            class="img-fluid"
                            alt=""
                        />
                    </div>
                </div>
                <div
                    class="col d-flex justify-content-center align-items-center gap-2"
                >
                    <button class="btn btn-danger text-light">View Courses</button>
                    <button class="wherecanmove btn btn-danger bg-transparent d-flex flew-row align-items-center">where can I move ? <img src={arrow} /></button>
                </div>
            </div>
            <div
                class="row justify-content-center align-items-center g-2 flex-row p-2"
            >   <div class="row">
                    <div class=" col d-flex justify-content-center align-items-center ">
                        <div class="happy-stn d-flex align-items-center justify-content-center p-2 gap-2">
                            <div>
                                <img
                                    src={users}
                                    class="img-fluid rounded-top"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>35000+ Happy Students</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-center align-items-center flex-wrap  gap-4 py-4">
                        <div class="box d-flex align-items-center flex-column gap-2 p-4 rounded ">
                            <div class="col d-flex flex-row align-items-center">
                                <h1 class="fw-bold">264K+</h1>
                                <img src={yt} />
                            </div>
                            <div class="col">
                                <p>Subscribers on Youtube</p>
                            </div>
                        </div>
                        <div class="box d-flex align-items-center flex-column gap-2 p-4 rounded ">
                            <div class="col d-flex flex-row align-items-center">
                                <h1 class="fw-bold">6K+</h1>
                                <img src={twitter} />
                            </div>
                            <div class="col">
                                <p>Followers On Twitter</p>
                            </div>
                        </div>
                        <div class="box d-flex align-items-center flex-column gap-2 p-3 rounded ">
                            <div class="col d-flex flex-row align-items-center">
                                <h1 class="fw-bold">1.2M+</h1>
                                <img src={insta} />
                            </div>
                            <div class="col">
                                <p>Followers on Instagram</p>
                            </div>
                        </div>
                        <div class="box d-flex align-items-center flex-column gap-2 p-3 rounded ">
                            <div class="col d-flex flex-row align-items-center">
                                <h1 class="fw-bold">264K+</h1>
                                <img src={linkedin} />
                            </div>
                            <div class="col">
                                <p>Followers on LinkedIn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Herosection