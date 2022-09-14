import React from "react";
import home1 from "../assets/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";

// Framer Motion
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>true.</motion.h2>
          </StyledHide>
        </motion.div>
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
