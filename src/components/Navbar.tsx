import React from "react";
import { NavLink } from "react-router-dom";
// import useWindowDimensions from "../hooks/useWindowDimensions";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-container">
        <li>
          <NavLink to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/films" activeClassName="selected">
            Films
          </NavLink>
        </li>
        <li>
          <NavLink to="/featured" activeClassName="selected">
            Featured
          </NavLink>
        </li>
        <li>
          <NavLink to="/other" activeClassName="selected">
            Other
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="selected">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
