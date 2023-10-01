import React from "react";
import "./Highlights.css";
import Scooter from "../../assets/Scooter.svg";
export const Highlights = () => {
  return (
    <div className="highlights">
      <div className="container">
        <h1>This weeks specials</h1>
        <button className="btn">Online Menu</button>
      </div>
      <div className="highlightssecond">
        <div className="container">
          <div className="divholder">
            <div className="cardholder1"></div>
            <div>
              <div className="textholder">
                <p>Greek Salad</p>
                <p className="price">$12.99</p>
              </div>
              <p className="centertext">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.{" "}
              </p>
              <div className="lastsection">
                <p>Order a delivery</p>
                <img src={Scooter} alt="icon" />
              </div>
            </div>
          </div>
          <div className="divholder">
            <div className="cardholder2"></div>
            <div>
              <div className="textholder">
                <p>Bruchetta</p>
                <p className="price">$5.99</p>
              </div>
              <p className="centertext">
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
              </p>
              <div className="lastsection">
                <p>Order a delivery</p>
                <img src={Scooter} alt="icon" />
              </div>
            </div>
          </div>
          <div className="divholder">
            <div className="cardholder3"></div>
            <div>
              <div className="textholder">
                <p>Lemon Dessert</p>
                <p className="price">$5.00</p>
              </div>
              <p className="centertext">
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
              </p>
              <div className="lastsection">
                <p>Order a delivery</p>
                <img src={Scooter} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
