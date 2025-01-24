import AboutUs1 from "../assets/images/about-us1.jpg";
import AboutUs2 from "../assets/images/about-us2.jpg";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-main">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      {/* Right Side Section */}
      <div className="about-us-right-section">
        <img src={AboutUs1} alt="" />
        <div className="about-us-p">
          <p>
            La Altceva Caffe, am creat un spațiu unde pasiunea pentru cafea de
            calitate și atmosfera relaxantă se întâlnesc. Situată în inima
            Bacăului, cafeneaua noastră este locul perfect pentru a savura o
            cafea aromată, o conversație plăcută sau câteva momente de liniște.
            Credem că fiecare ceașcă de cafea spune o poveste, iar noi ne
            asigurăm că povestea pe care o spunem este una autentică. Selectăm
            cu grijă cele mai bune boabe de cafea, pe care le preparăm cu
            măiestrie pentru a oferi o experiență unică fiecărui client.
          </p>
        </div>
      </div>
      <hr className="about-hr" />
      {/* Left Side Section */}
      <div className="about-us-left-section">
        <img src={AboutUs2} alt="" />
        <div className="about-us-p">
          <p>
            Pe lângă cafeaua excepțională, la Altceva Caffe te așteaptă o
            varietate de băuturi, deserturi delicioase și o ambianță care te
            face să te simți ca acasă. Este locul unde tradiția și modernitatea
            se îmbină armonios, oferindu-ți „altceva” la fiecare vizită. Fie că
            vii singur, cu prietenii sau pentru o întâlnire de afaceri, te
            așteptăm cu brațele deschise. Hai să descoperi ce înseamnă cu
            adevărat să savurezi momentul la Altceva Caffe!
          </p>
        </div>
      </div>
    </div>
  );
}
