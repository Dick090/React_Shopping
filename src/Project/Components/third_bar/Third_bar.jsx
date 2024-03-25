import React from 'react'
import './Third_bar.css'
function Third_bar() {
  return (
    <div>
      <div className="third_bar_holder">
        <div className="shoe_holder_th">
          <img src="../public/images/blue shoe.png" alt="" />
        </div>
        <div className="text_holder_th">
          <div className="topic_hd_th">
            <p>Lorem, ipsum <br />dolor.</p>
          </div>
          <div className="note_th">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="button_th">
            <button>Buy Now For Free</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third_bar
