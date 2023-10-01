import React from "react";
import "./Hero.css";
import Hero1 from "../../assets/Hero.jpg";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <h1 className="main first-text">Little Lemon</h1>
          <h2 className="main second-text">Chicago</h2>
          <p className="third-text">
            We are a family owned Mediterranean restaurant,
            <br></br>
            focused on traditional recipes served
            <br></br>with a modern twist.
          </p>
          <button type="submit" className="btn ">
            Reserve a Table
          </button>
        </div>
        <div className="image">
          <img src={Hero1} alt="dish" />
        </div>
      </div>
    </div>
  );
};
