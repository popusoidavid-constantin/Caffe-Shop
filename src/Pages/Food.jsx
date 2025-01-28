import ProductList from "../products/ProductList";
import ScrollToButton from "../shared/Navigation/ScrollToButton";
import "./Food.css";

export default function Food() {
  return (
    <div id="filter-container" className="main-content">
      <ul className="filter-container">
        <ScrollToButton
          targetId="YOU ARE MY BAGEL"
          label="YOU ARE MY BAGEL"
        ></ScrollToButton>
        <ScrollToButton
          targetId="BUDDHA BOWL"
          label="BUDDHA BOWL"
        ></ScrollToButton>
        <ScrollToButton targetId="SOUP" label="SOUP"></ScrollToButton>
        <ScrollToButton
          targetId="BRUNCH & BREAKFAST CLUB"
          label="BRUNCH"
        ></ScrollToButton>
        <ScrollToButton
          targetId="AVOCADO & FRIENDS"
          label="AVOCADO & FRIENDS"
        ></ScrollToButton>
        <ScrollToButton
          targetId="CLUB SANDWICH"
          label="CLUB SANDWICH"
        ></ScrollToButton>
        <ScrollToButton targetId="SALADS" label="SALADS"></ScrollToButton>
        <ScrollToButton targetId="PANCAKES" label="PANCAKES"></ScrollToButton>
      </ul>
      <div className="food-content">
        <ProductList />
      </div>
    </div>
  );
}
