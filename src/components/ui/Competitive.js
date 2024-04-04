import React from 'react'
import tick from '../../assests/images/tick.svg'
import chart from '../../assests/images/Image [object-cover] (1).png'

const Competitive = () => {
  return (
    <div>
      <div class="container">
        <div
            class="row justify-content-center align-items-center flex-column g-2 py-4 gap-4"
        >
            <div class="col">
                <div class="h2">
                Globalogy Advantages: Your Competitive Edge
                </div>
                <div class="h6 sub-text">
                Explore the unique benefits that set Globalogy apart, giving you the competitive edge in your Carrier push.
                </div>
            </div>
            <div class="mid col">
                <div
                    class="row justify-content-center align-items-center g-2 gap-4"
                >
                    <div class="col-lg-6 col-sm-12">
                        <div
                            class="row justify-content-center align-items-center g-2 flex-column"
                        >
                            <div class="col">
                                <div class="h6 d-flex flex-row gap-2">
                                70%+ interview schedule from global
                                    <img
                                        src={tick}
                                        class="img-fluid rounded-top"
                                        alt=""
                                    />
                                    
                                
                                </div>
                            </div>
                            <div class="col">
                                <div class="h6 h6 d-flex flex-row gap-2">
                                1:1 Mentorship
                                    <img
                                        src={tick}
                                        class="img-fluid rounded-top"
                                        alt=""
                                    />
                                    
                                </div>
                            </div>
                            <div class="col">
                                <div class="h6 h6 d-flex flex-row gap-2">
                                Integrated community platform
                                    <img
                                        src={tick}
                                        class="img-fluid rounded-top"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div class="col">
                                <div class="h6 h6 d-flex flex-row gap-2">
                                Profile highlighted on LinkedIn 
                                    <img
                                        src={tick}
                                        class="img-fluid rounded-top"
                                        alt=""
                                    />
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="col graph">
                        <img
                            src={chart}
                            class="img-fluid rounded-top"
                            alt=""
                        />
                        
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Competitive
