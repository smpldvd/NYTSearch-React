import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      NYT Search | Powered by React
    </a>
    <NavLink
      to="/"
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
      className="text-dark"
    >
      Home
    </NavLink>
    <NavLink
      to="/saved"
      activeStyle={{
        fontWeight: "bold",
        color: "red"
      }}
      className="text-dark"
    >
      Saved
    </NavLink>
  </nav>
);

export default Nav;
