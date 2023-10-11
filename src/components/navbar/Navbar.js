import React from "react";
import "./Navbar.css";

import Logo from "../../assets/Logo.svg";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="Main logo" />

        <ul className="nav-menu bold">
          <li>
            <a className="first" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/booking">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
