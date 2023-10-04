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
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Reservations</p>
            <p>Order Online</p>
            <p>Login</p>
          </div>
          <div className="text-holder">
            <h3>Contact</h3>
            <p>Address</p>
            <p>phone number</p>
            <p>email</p>
          </div>
          <div className="text-holder">
            <h3>Social Media Links</h3>
            <p>Address</p>
            <p>phone number</p>
            <p>email</p>
          </div>
        </div>
      </div>
    </div>
  );
};
