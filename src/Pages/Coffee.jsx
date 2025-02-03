import { products } from "../assets/assets";
import ProductList from "../products/ProductList";
import ScrollToButton from "../shared/Navigation/ScrollToButton";

import "./Coffee.css";

export default function Coffee() {
  // Step 1: Group products by category

  return (
    <div className="coffee-content">
      <div className="coffee-header">
        <h1 className="prata-regular-font h1">Coffee</h1>
      </div>
      <div className="filter-options-coffee">
        <ul className="filter-ul-coffee">
          <ScrollToButton
            targetId="SPECIALITY COFFE & MORE"
            label="SPECIALITY COFFE & MORE"
            className="scroll-button-coffee tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="JUICE IT UP"
            label="JUICE IT UP"
            className="scroll-button-coffee tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="SHAKES & SMOOTHIES"
            label="SHAKES & SMOOTHIES"
            className="scroll-button-coffee tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="ENERGY BOWL"
            label="ENERGY BOWL"
            className="scroll-button-coffee tomorrow-medium"
          ></ScrollToButton>
        </ul>
      </div>
      <div className="food-container">
        <ProductList categoryProducts={products.CoffeeMenu} />
      </div>
    </div>
  );
}
