import React from "react";
import { assets } from "../assets/assets";
import ImageScrollEffect from "../shared/UIElements/ImageScrollEffect";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-main">
      <div className="about-us-header">
        <h1 className="prata-regular-font ">About Us</h1>
      </div>
      {/* Right Side Section */}
      <div className="about-us-right-section">
        <ImageScrollEffect
          imageSource={assets.AboutUs1}
          width={"w-[30vh] md:w-[170vh] "}
          borderRadius={"rounded"}
          classType={"about-us-img"}
        />
        <hr className="border-t-2 border-amber-50" />
        <div className="about-us-p">
          <p className="tomorrow-medium centered-p ">
            La Altceva Caffe, am creat un spațiu unde pasiunea pentru cafea de
            calitate și atmosfera relaxantă se întâlnesc. Situată în inima
            Bacăului, cafeneaua noastră este locul perfect pentru a savura o
            cafea aromată, o conversație plăcută sau câteva momente de liniște.
          </p>
        </div>
      </div>
      <p className="tomorrow-medium white-color">
        Fiecare ceașcă de cafea spune o poveste!
      </p>
      <hr className="border-t-2 border-amber-50" />
      <hr className="border-t-2 border-amber-50" />
      <div className="image-hero-section">
        <img
          src={assets.heroImg1}
          className="hero-img"
          alt="Altceva Caffe Bacau Photos"
          loading="lazy"
        />

        <img
          src={assets.heroImg2}
          className="hero-img"
          alt="Altceva Caffe Bacau Photos"
          loading="lazy"
        />
        <img
          src={assets.heroImg3}
          className="hero-img"
          alt="Altceva Caffe Bacau Photos"
          loading="lazy"
        />
        <img
          src={assets.heroImg4}
          className="hero-img"
          alt="Altceva Caffe Bacau Photos"
          loading="lazy"
        />
        <img
          src={assets.heroImg5}
          className="hero-img"
          alt="Altceva Caffe Bacau Photos"
          loading="lazy"
        />
        <img
          src={assets.heroImg6}
          className="hero-img"
          alt="Altceva Caffe Bacau Photos"
          loading="lazy"
        />
        <img
          src={assets.heroImg7}
          className="hero-img"
          alt="Altceva Caffe Bacau Photos"
          loading="lazy"
        />
        <img
          src={assets.heroImg8}
          className="hero-img"
          alt="Altceva Caffe Bacau Photos"
          loading="lazy"
        />
      </div>
      <hr className="border-t-2 border-amber-50" />{" "}
      <hr className="border-t-2 border-amber-50" />
      <div className="about-us-left-section">
        <ImageScrollEffect
          imageSource={assets.AboutUs2}
          width={"w-[25vh] md:w-[130vh] md:h-[80vh]"}
          borderRadius={"rounded"}
          classType={"about-us-img"}
        />
        <hr className="section-hr" />
        <div className="about-us-p">
          <p className="tomorrow-medium centered-p">
            Pe lângă cafeaua excepțională, la Altceva Caffe te așteaptă o
            varietate de băuturi, deserturi delicioase și o ambianță care te
            face să te simți ca acasă. Este locul unde tradiția și modernitatea
            se îmbină armonios, oferindu-ți „altceva” la fiecare vizită. Fie că
            vii singur, cu prietenii sau pentru o întâlnire de afaceri, te
            așteptăm cu brațele deschise.
          </p>
        </div>
      </div>
    </div>
  );
}
