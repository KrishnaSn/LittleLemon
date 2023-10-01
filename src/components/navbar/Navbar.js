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
          <a className="first" href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservations">Reservations</a>
        </li> 
        <li>
          <a href='#orderonline'>Order Online</a>
        </li>
        <li>
          <a href='#login'>Login</a>
        </li>
      </ul>
      </div>
    </div>
  );
};
