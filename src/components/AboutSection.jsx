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
import { titleAim, fade, photoAim } from "../animation";

import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAim}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography for ideas that you have.
          We have porfessionals with amazing skills.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Us</motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAim} src={home1} alt="Home1"></motion.img>
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
