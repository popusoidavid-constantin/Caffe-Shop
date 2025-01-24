import { NavLink } from "react-router-dom";
import cardImg1 from "../../assets/images/card-img-1.jpg";
import cardImg4 from "../../assets/images/card-img-4.jpg";

import "./FoodLinks.css";

export default function FoodLinks() {
  return (
    <main className="food-links-main">
      <div className="food-div">
        <h3>Please select your category</h3>
        <ul className="food-nav">
          <NavLink className="nav-select-item" to="/coffee">
            <li>Coffee</li>
          </NavLink>
          <NavLink className="nav-select-item" to="/food">
            <li>Brunch</li>
          </NavLink>
        </ul>
      </div>
      <div className="image-div">
        <img className="category-img" src={cardImg4} alt="" />
        <img className="category-img" src={cardImg1} alt="" />
      </div>
    </main>
  );
}
