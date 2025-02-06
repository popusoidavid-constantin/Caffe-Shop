import React from "react";
import FooterInfo from "../shared/UIElements/FooterInfo";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import "../shared/Navigation/FoodLinks.css";
import ImageScrollEffect from "../shared/UIElements/ImageScrollEffect";
import "./pages.css";

export default function Home() {
  return (
    <div className="main-content">
      <div className="welcome-container" loading="lazy">
        <h1 className="playfair-display-font">Welcome to Altceva Caffe!</h1>
      </div>
      <div className="section-card">
        <ImageScrollEffect
          imageSource={assets.logo1}
          width={"w-[20vh] md:w-[45vh] "}
          borderRadius={"rounded-[100vh]"}
          classType={"img-card"}
        />
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
      <hr className=" w-max border-t-2 border-amber-50" />
      <hr className="border-t-2 border-amber-50" />
      <br />
      <br />
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
        <ImageScrollEffect
          imageSource={assets.logo2}
          width={"w-[20vh] md:w-[45vh]"}
          borderRadius={"rounded-[100vh]"}
          classType={"img-card"}
        />
      </div>
      <hr className=" w-max border-t-2 border-amber-50" />
      <hr className="border-t-2 border-amber-50" />
      <br />

      <div className="food-links-div">
        <div className="select-container">
          <div className="select-div">
            <main className="food-links-main">
              <div className="food-div playfair-dysplay-font">
                <h3 className="playfair-display-font">
                  Please select your category
                </h3>
                <ul className="food-nav">
                  <NavLink
                    className="nav-select-item "
                    to="/coffee"
                    aria-labelledby="Altceva Caffe Coffee Link"
                  >
                    <li
                      id="Altceva Caffe Coffee Link"
                      className="prata-regular-font category-select"
                    >
                      Coffee
                    </li>
                  </NavLink>
                  <NavLink
                    className="nav-select-item"
                    to="/food"
                    aria-labelledby="Altceva Caffe Food Link"
                  >
                    <li
                      id="Altceva Caffe Food Link"
                      className="prata-regular-font category-select"
                    >
                      Brunch
                    </li>
                  </NavLink>
                </ul>
              </div>
              <div className="image-div">
                <img
                  className="category-img "
                  src={assets.heroImg4}
                  alt="Altceva Caffe Bacau Coffee"
                />
                <img
                  className="category-img "
                  src={assets.heroImg1}
                  alt="Altceva Caffe Bacau Food"
                />
              </div>
            </main>
          </div>
        </div>
      </div>
      <FooterInfo />
    </div>
  );
}
