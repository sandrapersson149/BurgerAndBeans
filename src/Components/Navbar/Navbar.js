import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import { StyledNav } from "./navbarStyled";

function Navbar() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
}

export default Navbar;
