import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <StyledToggle
      layout
      onClick={() => setToggle(!toggle)}
      className="question"
    >
      <motion.h4 layout> {title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </StyledToggle>
  );
};

const StyledToggle = styled(motion.div)`
  cursor: pointer;
`;

export default Toggle;
