import "./ScrollToButton.css";

const ScrollToButton = ({ targetId, label }) => {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn(`Element with id '${targetId}' not found.`);
    }
  };

  return (
    <button onClick={handleScroll} className="scroll-button">
      {label || "Scroll to Category"}
    </button>
  );
};

export default ScrollToButton;
