import AboutUs1 from "../assets/images/about-us1.jpg";
import AboutUs2 from "../assets/images/about-us2.jpg";

import img1 from "../assets/images/card-img-1.jpg";
import img2 from "../assets/images/card-img-2.jpg";
import img3 from "../assets/images/card-img-3.jpg";
import img4 from "../assets/images/card-img-4.jpg";

import img5 from "../assets/images/card-img-5.jpg";
import img6 from "../assets/images/card-img-6.jpg";
import img7 from "../assets/images/card-img-7.jpg";
import img8 from "../assets/images/card-img-8.jpg";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-main">
      <div className="about-us-header">
        <h1 className="prata-regular-font ">About Us</h1>
      </div>
      {/* Right Side Section */}
      <div className="about-us-right-section">
        <img src={AboutUs1} alt="" className="about-us-img" />
        <hr />
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
      <hr className="hero-hr" />
      <hr className="about-hr" />

      <div className="image-hero-section">
        <img src={img1} className="hero-img" alt="" />
        <img src={img2} className="hero-img" alt="" />
        <img src={img3} className="hero-img" alt="" />
        <img src={img4} className="hero-img" alt="" />
        <img src={img5} className="hero-img" alt="" />
        <img src={img6} className="hero-img" alt="" />
        <img src={img7} className="hero-img" alt="" />
        <img src={img8} className="hero-img" alt="" />
      </div>
      <hr className="hero-hr" />
      <hr className="hero-hr" />
      {/* Left Side Section */}
      <div className="about-us-left-section">
        <img src={AboutUs2} alt="" className="about-us-img" />
        <hr />
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
