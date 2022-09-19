import React from "react";
// Import Icons
import clock from "../assets/clock.svg";
import diapgraph from "../assets/diaphragm.svg";
import money from "../assets/money.svg";
import teamwork from "../assets/teamwork.svg";
// Import imagaes
import home2 from "../assets/home2.png";
// Styles
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
import styled from "styled-components";

import { scrollReveal } from "../animation";
import useScroll from "./useScroll";

const SevicesSection = () => {
  const [element, control] = useScroll();

  return (
    <StyledServices
      variants={scrollReveal}
      animate={control}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          High <span>qaulity</span> services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diapgraph} alt="icon" />
              <h3>Diapgraph</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="Home2" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default SevicesSection;
