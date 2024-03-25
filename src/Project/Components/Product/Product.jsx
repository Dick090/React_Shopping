import React from "react";
import { FaStar } from "react-icons/fa";
import "./Product.css";
function Product() {
  return (
    <div className="pro_container">
      <div className="left">
        <div className="img">
          <img
            src="https://th.bing.com/th/id/OIP.1ThZ2LiW1Ubsat0ux-EkzwHaE8?rs=1&pid=ImgDetMain"
            alt=""
            className="container"
          />
        </div>
        <div className="shoes">


          <div className="shoe_1">
            <img src="https://th.bing.com/th/id/OIP.1ThZ2LiW1Ubsat0ux-EkzwHaE8?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div className="shoe_2">
            <img src="images/1560461304-sketchers-gorun-maxtrail-1461-1532626092__1_-removebg-preview.png" alt="" />
          </div>
          <div className="shoe_3">
            <img src="images/1560461304-sketchers-gorun-maxtrail-1461-1532626092__1_-removebg-preview.png" alt="" />
          </div>

        </div>
      </div>
      <div className="ryt">
        <div className="pro_desc">
          <h1>Product Name</h1>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <div className="ico">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="grey" />
          </div>
          <div className="p">
            <p className="price">$120</p>
            <p className="style">style #:279hfd</p>
          </div>

          <form>
            <select name="" id="">
              <option value="">#r24b</option>
            </select>
            <select name="" id="">
              <option style={{color:'red'}} value="">Qty24a</option>
              <option value="">that is the big one r</option>
              <option value="">you will not likwe this one </option>
            </select>
            <button>ADD TO CART</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
