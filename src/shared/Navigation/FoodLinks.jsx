import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

import "./FoodLinks.css";

export default function FoodLinks() {
  return (
    <main className="food-links-main">
      <div className="food-div playfair-dysplay-font">
        <h3 className="playfair-display-font">Please select your category</h3>
        <ul className="food-nav">
          <NavLink className="nav-select-item " to="/coffee">
            <li className="prata-regular-font category-select">Coffee</li>
          </NavLink>
          <NavLink className="nav-select-item" to="/food">
            <li className="prata-regular-font category-select">Brunch</li>
          </NavLink>
        </ul>
      </div>
      <div className="image-div">
        <img className="category-img " src={assets.heroImg4} alt="" />
        <img className="category-img " src={assets.heroImg1} alt="" />
      </div>
    </main>
  );
}
