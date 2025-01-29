import CoffeeMenu from "../products/CoffeeMenu";
import ProductList from "../products/ProductList";
import ScrollToButton from "../shared/Navigation/ScrollToButton";

import "./Coffee.css";

export default function Coffee() {
  // Step 1: Group products by category

  return (
    <div className="coffee-content">
      <div className="filter-options-coffee">
        <ul className="filter-ul-coffee">
          <ScrollToButton
            targetId="SPECIALITY COFFE & MORE"
            label="SPECIALITY COFFE & MORE"
            className="scroll-button-coffee"
          ></ScrollToButton>
          <ScrollToButton
            targetId="JUICE IT UP"
            label="JUICE IT UP"
            className="scroll-button-coffee"
          ></ScrollToButton>
          <ScrollToButton
            targetId="SHAKES & SMOOTHIES"
            label="SHAKES & SMOOTHIES"
            className="scroll-button-coffee"
          ></ScrollToButton>
          <ScrollToButton
            targetId="ENERGY BOWL"
            label="ENERGY BOWL"
            className="scroll-button-coffee"
          ></ScrollToButton>{" "}
        </ul>
      </div>
      <div className="coffee-container">
        <ProductList categoryProducts={CoffeeMenu} />
      </div>
    </div>
  );
}
