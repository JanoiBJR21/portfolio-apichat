import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      {/* <!------ Home ------> */}
      <div className="container">
          <nav>
            <Link to="/" className="logo">
              <h1>
                <span>A</span>pichat.
              </h1>
            </Link>
            {/* <!-- <img src="images/logo.png" class="logo" /> --> */}
            <ul id="sidemenu">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {/* <i className="fas fa-times" onClick="closemenu()"></i> */}
            </ul>
            {/* <i className="fas fa-bars" onClick="openmenu()"></i> */}
          </nav>
          </div>
    </>
  );
};
