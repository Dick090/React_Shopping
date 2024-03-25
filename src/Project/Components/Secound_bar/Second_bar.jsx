import React from 'react'
import './Second_bar.css'
import { FaSquareCaretRight } from "react-icons/fa6";
function Second_bar() {
  return (
    <div>
      <div className="second_bar">
        <div className="input_se">
          <input type="text"  placeholder='Search Now'/>
          <div className="ico_se">
<FaSquareCaretRight size={39} color='blue' />
          </div>
        </div>

        <div className="text_se">
   <h4>Lorem, ipsum dolor.</h4>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fuga hic quis dolore ipsam assumenda rerum magni ad ab, illum velit autem quibusdam reiciendis?</p>
        </div>
      </div>
    </div>
  )
}

export default Second_bar
