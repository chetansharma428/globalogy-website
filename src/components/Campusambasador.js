import React from 'react'
import timer from "../assests/images/fast-time.png"

const Campusambasador = () => {
  return (
    <div>
      <div class="container">
      <div class="d-flex justify-content-center align-items-center gap-2" style={{paddingBottom:"100px"}}>
              <img
                src={timer}
                class="img-fluid rounded-top"
                alt=""
                style={{width:"128px", height:"128px"}}
              />
              <div class="display-3 text-light">Coming soon!</div>
            </div>
      </div>
    </div>
  )
}

export default Campusambasador
