
import ProductList from "../products/ProductList";
import FoodMenu from "../products/FoodMenu";

export default function Food() {
  {
    FoodMenu.map((p) => {
      console.log(p.category);
    });
  }
  return (
    <div className="main-content">
      <div className="food-content">
        <ProductList />
      </div>
    </div>
  );
}
