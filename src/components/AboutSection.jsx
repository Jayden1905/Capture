import React from "react";
import home1 from "../assets/home1.png";
// Styled
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography for ideas that you have.
          We have porfessionals with amazing skills.
        </p>
        <Link to="/contact">
          <button>Contact Us</button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="Home1"></img>
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
