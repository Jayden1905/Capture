import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname: pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
          <div className="line">
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "100%" : "0%" }}
            />
          </div>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
          <div className="line">
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/work" ? "104%" : "0%" }}
            />
          </div>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
          <div className="line">
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/contact" ? "121%" : "0%" }}
            />
          </div>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-top: 1rem;
    padding-left: 10rem;
    position: relative;
    /* wdith: 5rem; */

    .line {
      position: relative;
      width: 6rem;
      height: 1rem;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    li {
      padding-left: 2rem;

      &:nth-child(3) {
        padding-right: 2rem;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: relative;
  top: 30%;
`;

export default Nav;
