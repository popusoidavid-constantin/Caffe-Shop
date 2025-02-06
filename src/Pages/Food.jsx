import React from "react";
import ProductList from "../products/ProductList";
import { motion } from "framer-motion";
import ScrollToButton from "../shared/Navigation/ScrollToButton";
import { products } from "../assets/assets";
import "./Food.css";

export default function Food() {
  return (
    <div id="filter-container" className="main-content">
      <div className="food-header-align">
        <div className="food-header">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=" text-white rounded-lg shadow-lg"
          >
            <h1 className="prata-regular-font ">Food</h1>
          </motion.div>
        </div>
      </div>
      <div className="filter-options">
        <ul className="filter-ul">
          <ScrollToButton
            targetId="YOU ARE MY BAGEL"
            label="YOU ARE MY BAGEL"
            className="scroll-button tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="BUDDHA BOWL"
            label="BUDDHA BOWL"
            className="scroll-button tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="SOUP"
            label="SOUP"
            className="scroll-button tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="BRUNCH & BREAKFAST CLUB"
            label="BRUNCH"
            className="scroll-button tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="AVOCADO & FRIENDS"
            label="AVOCADO & FRIENDS"
            className="scroll-button tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="CLUB SANDWICH"
            label="CLUB SANDWICH"
            className="scroll-button tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="SALADS"
            label="SALADS"
            className="scroll-button tomorrow-medium"
          ></ScrollToButton>
          <ScrollToButton
            targetId="PANCAKES"
            label="PANCAKES"
            className="scroll-button tomorrow-medium"
          ></ScrollToButton>
        </ul>
      </div>
      <div className="food-content">
        <ProductList categoryProducts={products.FoodMenu} />
      </div>
    </div>
  );
}
