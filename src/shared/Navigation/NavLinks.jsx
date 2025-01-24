import { NavLink } from "react-router-dom";
import "./NavLinks.css";

export default function NavLinks(props) {
  return (
    <ul className="nav-links">
      <li onClick={props.drawerRedirect}>
        <NavLink to="/" className="nav-item">
          HOME
        </NavLink>
      </li>
      <li onClick={props.drawerRedirect}>
        <NavLink to="/food" className="nav-item">
          FOOD
        </NavLink>
      </li>
      <li onClick={props.drawerRedirect}>
        <NavLink to="/coffee" className="nav-item">
          COFFEE
        </NavLink>
      </li>
      <li onClick={props.drawerRedirect}>
        <NavLink to="/about-us" className="nav-item">
          ABOUT US
        </NavLink>
      </li>
    </ul>
  );
}
