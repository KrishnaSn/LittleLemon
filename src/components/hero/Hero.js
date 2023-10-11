import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
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
          <Link to="/booking">
            <button type="submit" className="btn ">
              Reserve a Table
            </button>
          </Link>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
};
