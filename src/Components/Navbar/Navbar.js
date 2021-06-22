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
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <h1>Burgers n' beans</h1>
    </StyledNav>
  );
}

export default Navbar;
