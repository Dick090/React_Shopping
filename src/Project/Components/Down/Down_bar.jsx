import React, { useState } from 'react'
import "./Down_bar.css";

import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

const Products = (img, Topic, about, price) => {

  return (
    <>
      <div className="down_Products">
        <div className="down_photo">
          <img src={img} alt="" />
        </div>
        <div className="down_pro_text">
          <h1>{Topic} </h1>
          <h2>{about} </h2>
          <h3>{price} </h3>
        </div>
      </div>
    </>

  )
}

function Down_bar() {
  const [blue_shoe, Set_blue_shoe] = useState(false);
  const [red_shoe,setRead_shoe] = useState(true)
  return (
    <div>
      <div className="Down_bar_container">
        <div className="down_part_1">
          <h4>others greate shoes</h4>
          <p>Lorem ipsum dolor sit amet.lorem4dolor Lorem ipsum dolor sit amet consectetur adipisicing  sit amet.lorem4dolor sit amet.lorem4</p>

        </div>
        <div className="down_part_2">
          <div className="hold_all">
            <div className="ico_down">
              < FaCaretLeft size={30} className='once_wr' onClick={()=>{
                setRead_shoe((per)=>!per)
                Set_blue_shoe((per)=>!per);
              }} />

              <FaCaretRight size={30} className='once_w' onClick={()=>{
                setRead_shoe((per)=>!per)
                Set_blue_shoe((per)=>!per);}} />
            </div>

            {blue_shoe ?
              <div className="controler_shoes">
                {Products("../public/images/one_1.png", 'Nike Roke Blue', 'best in all use', '$978')}
                {Products("../public/images/OIP__2_-removebg-preview.png", 'Nike Roke Blue', 'best in all use', '$9,278')}
                {Products("../public/images/two_1.png", 'Nike Roke Blue', 'For all use', '$978')}
              </div> : ''}
            {red_shoe ?
              <div className="controler_shoes">
                {Products("../public/images/ladies-1.png", 'Red Queen', 'only one remains', '$8,872')}
                {Products("../public/images/ladies_2.png", 'celine don red ', 'best for all use', '$19,278')}
                {Products("../public/images/ladies_3.png", 'Red rose stone', 'only two all over the work ', '$1,178')}
              </div> : ''}

          </div>
        </div>

        <div className="other_text_dw">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="fooote_other_dw">

        </div>
      </div>


    </div>
  )
}

export default Down_bar
