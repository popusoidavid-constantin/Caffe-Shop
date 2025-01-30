import Logo1 from "../assets/images/Logo.jpg";
import Logo2 from "../assets/images/Logo2.jpg";
import FoodLinks from "../shared/Navigation/FoodLinks";

import FooterInfo from "../shared/UIElements/FooterInfo";
import SecondBackgroundImg from "../assets/images/cozy-coffee-shop.jpg";
import MainBackgroundImg from "../assets/images/main-content.png";
import "./pages.css";

export default function Home() {
  const MainBackgroundStyle = {
    backgroundImage: `url(${MainBackgroundImg})`,
  };
  const SecondBackgroundStyle = {
    backgroundImage: `url(${SecondBackgroundImg})`,
    backgroundPosition: "center",
    backgroundBlendMode: "multiply" /* Blend with the color */,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  };
  return (
    <div className="main-content">
      <div className="centered-div">
        <div className="glow-div" style={MainBackgroundStyle}>
          <div className="welcome-container">
            <h2 className="playfair-display-font">Welcome to Altceva Caffe!</h2>
          </div>
        </div>
      </div>

      <div className="section-card">
        <img src={Logo1} className="img-card" />
        <div className="text-container">
          <p className="card-text inter-font">
            Evadarea ta perfectă în inima Bacăului!
            <br />
            La Altceva, credem că oferim mai mult decât cafea, creăm experiențe.
            Pășește în spațiul nostru cald și primitor, unde designul modern se
            îmbină cu confortul plăcut.
          </p>
        </div>
      </div>
      <hr className="hr-yellow" />
      <hr className="hr-yellow" />
      <br />
      <br />
      <div className="section2-card">
        <div className="text-container inter-font">
          <p className="card-text">
            Fie că ești în căutarea unui loc liniștit pentru a lucra, să te
            întâlnești cu prietenii sau pur și simplu să te relaxezi, suntem
            aici pentru a face fiecare moment special.
          </p>
        </div>
        <img src={Logo2} className="img-card" />
      </div>

      <div className="food-links-div">
        <div className="select-container">
          <div style={SecondBackgroundStyle} className="select-div">
            <FoodLinks></FoodLinks>
          </div>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}
