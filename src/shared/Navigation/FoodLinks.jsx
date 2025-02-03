import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

import "./FoodLinks.css";

export default function FoodLinks() {
  return (
    <main className="food-links-main">
      <div className="food-div playfair-dysplay-font">
        <h3 className="playfair-display-font">Please select your category</h3>
        <ul className="food-nav">
          <NavLink
            className="nav-select-item "
            to="/coffee"
            aria-labelledby="Altceva Caffe Coffee Link"
          >
            <li
              id="Altceva Caffe Coffee Link"
              className="prata-regular-font category-select"
            >
              Coffee
            </li>
          </NavLink>
          <NavLink
            className="nav-select-item"
            to="/food"
            aria-labelledby="Altceva Caffe Food Link"
          >
            <li
              id="Altceva Caffe Food Link"
              className="prata-regular-font category-select"
            >
              Brunch
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="image-div">
        <img
          className="category-img "
          src={assets.heroImg4}
          alt="Altceva Caffe Bacau Coffee"
        />
        <img
          className="category-img "
          src={assets.heroImg1}
          alt="Altceva Caffe Bacau Food"
        />
      </div>
    </main>
  );
}
