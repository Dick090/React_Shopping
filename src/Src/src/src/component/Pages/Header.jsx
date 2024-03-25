import React from "react";
import Footer from "./Footer";
import Home from "./Home/Home";
import { NavLink } from "react-router-dom";

function Header() {
  const Links = [
    {
      id: 1,
      url: "Home",
      path: "/",
    },
    { id: 2, url: "About", path: "about" },
    { id: 3, url: "Contact", path: "contact" },
    { id: 4, url: "Register", path: "register" },
  ];

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    window.location.href = "/register";
  };
  return (
    <div>
      <header>
        <ul>
          {Links.map((url) => {
            return (
              <>
                <li>
                  <NavLink to={url.path}>{url.url}</NavLink>
                </li>
              </>
            );
          })}
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
