import React from "react";
import "./ProductList.css";
import FoodMenu from "./FoodMenu";
import ProductCard from "./ProductCard";

export default function ProductList() {
  // Step 1: Group products by category
  const groupedProducts = FoodMenu.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item.product); // Add the product details
    return acc;
  }, {});

  return (
    <div className="food-container">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <div key={category} className="category-section">
          <h1>{category}</h1>
          <ul className="item-list">
            {products.map((product, index) => (
              <li key={index}>
                <ProductCard
                  product={product.name}
                  price={product.price}
                  info={product.info}
                  qty={product.qty}
                  unit={product.unit}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
