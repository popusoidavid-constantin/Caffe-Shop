import ProductList from "../products/ProductList";
import ScrollToButton from "../shared/Navigation/ScrollToButton";
import FoodMenu from "../products/FoodMenu";
import "./Food.css";

export default function Food() {
  return (
    <div id="filter-container" className="main-content">
      <div className="filter-options">
        <ul className="filter-ul">
          <ScrollToButton
            targetId="YOU ARE MY BAGEL"
            label="YOU ARE MY BAGEL"
            className="scroll-button"
          ></ScrollToButton>
          <ScrollToButton
            targetId="BUDDHA BOWL"
            label="BUDDHA BOWL"
            className="scroll-button"
          ></ScrollToButton>
          <ScrollToButton
            targetId="SOUP"
            label="SOUP"
            className="scroll-button"
          ></ScrollToButton>
          <ScrollToButton
            targetId="BRUNCH & BREAKFAST CLUB"
            label="BRUNCH"
            className="scroll-button"
          ></ScrollToButton>
          <ScrollToButton
            targetId="AVOCADO & FRIENDS"
            label="AVOCADO & FRIENDS"
            className="scroll-button"
          ></ScrollToButton>
          <ScrollToButton
            targetId="CLUB SANDWICH"
            label="CLUB SANDWICH"
            className="scroll-button"
          ></ScrollToButton>
          <ScrollToButton
            targetId="SALADS"
            label="SALADS"
            className="scroll-button"
          ></ScrollToButton>
          <ScrollToButton
            targetId="PANCAKES"
            label="PANCAKES"
            className="scroll-button"
          ></ScrollToButton>
        </ul>
      </div>
      <div className="food-content">
        <ProductList categoryProducts={FoodMenu} />
      </div>
    </div>
  );
}
