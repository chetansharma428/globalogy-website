import React from 'react'
import emoji from '../../assests/images/facing-issue-emoji.svg'

const Facingissue = () => {
  return (
    <div class="d-flex fixed-bottom justify-content-end p-4">
      <button class="btn d-flex flex-row gap-2 text-light" href="">
        <img
            src={emoji}
            class="img-fluid rounded-top"
            alt=""
            style={{height : "24px", width : "24px"}}
        />
        Facing an issue?</button>  
    </div>
  )
}

export default Facingissue
