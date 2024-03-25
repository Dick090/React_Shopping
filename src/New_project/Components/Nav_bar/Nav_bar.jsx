import React from 'react'
import './Nav_bar.css'
import { FaSearch } from 'react-icons/fa'
import { GiEternalLove } from "react-icons/gi";
import { FaShopify } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";


function Nav_bar() {
  return (
    <>
      <div className="Nav_bar_holder">

        <div className="top_nav_bar_nb">
          <div className="first_holder_nb">
            <p> shoefffs.</p>
            <p> pslaker.</p>
          </div>


          <div className="secound_holder_nb">
            <p>engish</p>
            <p>spanish</p>
            <p>london</p>
            <p>Canada</p>
          </div></div>




        <div className="main_nav_holder">


          <div className="logo_nav_nb">
            <FaBagShopping className='logo' size={60} />
            <div className="Name_nav_nb">
              <p>Free Shop</p>
              <h6>All for free Now</h6>
            </div></div>

          <div className="search_holder_nb">
            <input type="text" placeholder='product search' />
            <FaSearch size={15} className='search_icon' />
          </div>

          <div className="last_holder_nb">
            <GiEternalLove size={20} />
            <button><FaShopify />Buy4Free</button>
          </div>
        </div>


      </div>

    </>
  )
}

export default Nav_bar
