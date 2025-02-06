import React from "react";
import "./ScrollToButton.css";

const ScrollToButton = ({ targetId, label, className }) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Element with id '${targetId}' not found.`);
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={className}
      aria-label={`Click here to navigate to the ${targetId} category.`}
    >
      {label || "Scroll to Category"}
    </button>
  );
};

export default ScrollToButton;
