import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <Nav bsStyle="pills">
    <NavLink to="/search">
      Find
    </NavLink>
    <NavLink to="/saved">
      Saved
    </NavLink>
  </Nav>
);

export default Nav;
