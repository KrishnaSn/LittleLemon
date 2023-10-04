import "./Testimonials.css";

import React from "react";

export const Testimonials = () => {
  return (
    <div className="Testimonials">
      <div className="container">
        <h1>Testimonials</h1>
        <div className="cards-section">
          <div className="card-holder">
            <p className="card-text primary">5 Star</p>
            <div className="user-holder">
              <div className="imageholder first"></div>
              <p className="card-text secondary">Radha Kamat</p>
            </div>
            <p className="card-text-last">Had a wonderful experience!</p>
          </div>
          <div className="card-holder">
            <p className="card-text primary">4 Star</p>
            <div className="user-holder">
              <div className="imageholder second"></div>
              <p className="card-text secondary">Paul Smith</p>
            </div>
            <p className="card-text-last">Loved the ambiance!</p>
          </div>
          <div className="card-holder">
            <p className="card-text primary">5 Star</p>
            <div className="user-holder">
              <div className="imageholder third"></div>
              <p className="card-text secondary">John William</p>
            </div>
            <p className="card-text-last">Food was awesome!</p>
          </div>
          <div className="card-holder">
            <p className="card-text primary">4 Star</p>
            <div className="user-holder">
              <div className="imageholder fourth"></div>
              <p className="card-text secondary">Jessica Jones</p>
            </div>
            <p className="card-text-last">Looking forward to visit again!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
