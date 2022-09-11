import React from "react";
// Import Icons
import clock from "../assets/clock.svg";
import diapgraph from "../assets/diaphragm.svg";
import money from "../assets/money.svg";
import teamwork from "../assets/teamwork.svg";
// Import imagaes
import home2 from "../assets/home2.png";

const SevicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>qaulity</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diapgraph} alt="icon" />
              <h3>Diapgraph</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Home2" />
      </div>
    </div>
  );
};

export default SevicesSection;
