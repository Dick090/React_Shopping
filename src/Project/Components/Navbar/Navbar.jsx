import React from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div>
      <div className="navContainer">
        <div className="navcont">
          <div className="logo_1">
            <h1>R_CLass</h1>
          </div>
          <div className="nav_1">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="nav_2_2">
            <ul>
              <li>Cart(1)</li>
              <li>John Blake</li>
            </ul>
          </div>
        </div>
        <div className="nav_2">
          <ul>
            <li>Men</li>
            <li>Women</li>
          </ul>
        </div>
      </div>
      <div className="navContainer_2">
        <ul>
          <li>Popular</li>
          <li>Men Wishes</li>
          <li>Women</li>
          <li>Random</li>
        </ul>

        <div className="ic">
          <FaSearch size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
