import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li
        onClick={props.drawerRedirect}
        aria-labelledby="Click here to access the home page"
      >
        <NavLink
          to="/"
          className="nav-item"
          id="Click here to access the home page"
        >
          HOME
        </NavLink>
      </li>
      <li
        onClick={props.drawerRedirect}
        aria-labelledby="Click here to access the food page"
      >
        <NavLink
          to="/food"
          className="nav-item"
          id="Click here to access the food page"
        >
          FOOD
        </NavLink>
      </li>
      <li
        onClick={props.drawerRedirect}
        aria-labelledby="Click here to access the coffee page"
      >
        <NavLink
          to="/coffee"
          className="nav-item"
          id="Click here to access the coffee page"
        >
          COFFEE
        </NavLink>
      </li>
      <li
        onClick={props.drawerRedirect}
        aria-labelledby="Click here to access the about us page"
      >
        <NavLink
          to="/about-us"
          className="nav-item"
          id="Click here to access the about us page"
        >
          ABOUT US
        </NavLink>
      </li>
    </ul>
  );
}
