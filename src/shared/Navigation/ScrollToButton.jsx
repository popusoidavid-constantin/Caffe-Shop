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
    <button onClick={handleScroll} className={className}>
      {label || "Scroll to Category"}
    </button>
  );
};

export default ScrollToButton;
