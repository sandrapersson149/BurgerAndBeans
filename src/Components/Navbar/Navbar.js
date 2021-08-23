import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { StyledNav, HeaderContainer } from "./navbarStyled";

function Navbar() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li>
          <Link to="/test">Test</Link>
        </li> */}
      </ul>


    </StyledNav >
  );
}

export default Navbar;
