import React from "react";
import "./Footer.css";
import Logo from "../../assets/footer.png";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="left-section">
          <img src={Logo} alt="logo" />
        </div>
        <div className="right-section">
          <div className="text-holder">
            <h3>Doormat Navigation</h3>
            <ul>
              <li>
                <a href="/">Home</a>
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
          <div className="text-holder">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="/">Address</a>
              </li>
              <li>
                <a href="/">phone number</a>
              </li>
              <li>
                <a href="/">email</a>
              </li>
            </ul>
          </div>
          <div className="text-holder">
            <h3>Social Media Links</h3>
            <ul>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
