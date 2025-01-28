import Logo1 from "../assets/images/Logo.jpg";
import Logo2 from "../assets/images/Logo2.jpg";
import FoodLinks from "../shared/Navigation/FoodLinks";

import FooterInfo from "../shared/UIElements/FooterInfo";
import SecondBackgroundImg from "../assets/images/cozy-coffee-shop.jpg";
import MainBackgroundImg from "../assets/images/main-content.jpg";
import "./pages.css";

export default function Home() {
  const isMobile = window.innerWidth <= 756;
  const MainBackgroundStyle = {
    backgroundImage: `url(${MainBackgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply" /* Blend with the color */,
    backgroundColor: isMobile
      ? "rgba(0, 0, 0, 0.78)"
      : "rgba(0, 0, 0, 0.61)" /* Black with 50% transparency */,
  };
  const SecondBackgroundStyle = {
    backgroundImage: `url(${SecondBackgroundImg})`,
    marginLeft: "10%",
    width: "80%",
    backgroundPosition: "center",
    backgroundBlendMode: "multiply" /* Blend with the color */,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    borderRadius: "10px" /* Black with 50% transparency */,
    boxShadow: "3px 3px 100px 1px rgba(208, 255, 176, 0.17)",
    marginBottom: "10%",
  };
  return (
    <div className="main-content">
      <div className="glow-div" style={MainBackgroundStyle}>
        <div className="welcome-container">
          <h2>Welcome to Altceva Caffe!</h2>
        </div>
        <div className="section-card">
          <img src={Logo1} className="img-card" />
          <div className="text-container">
            <p className="card-text">
              Evadarea ta perfectă în inima Bacăului!
              <br />
              La Altceva, credem că oferim mai mult decât cafea; creăm
              experiențe. Pășește în spațiul nostru cald și primitor, unde
              designul modern se îmbină cu confortul plăcut.
            </p>
          </div>
        </div>
        <div className="section2-card">
          <div className="text-container">
            <p className="card-text">
              Fie că ești în căutarea unui loc liniștit pentru a lucra, să te
              întâlnești cu prietenii sau pur și simplu să te relaxezi, suntem
              aici pentru a face fiecare moment special.
            </p>
          </div>
          <img src={Logo2} className="img-card" />
        </div>
      </div>
      <div style={SecondBackgroundStyle} className="selet">
        <FoodLinks></FoodLinks>
      </div>

      <FooterInfo />
    </div>
  );
}
