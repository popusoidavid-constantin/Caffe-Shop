import "./FooterInfo.css";
import ImageCard from "./ImageCard";
import { assets } from "../../assets/assets";

export default function FooterInfo() {
  return (
    <div className="information-for-products">
      <ImageCard image={assets.scrambledEggs} className="footer-img" />
      <h4 className="playfair-display-font ">
        Descoperă o experiență culinară unică la Altceva Caffe, Bacău! 🍴
      </h4>
      <p className="inter-font ">
        Meniul nostru este o armonie perfectă între gusturi autentice și
        ingrediente proaspete, pregătite cu pasiune. De la mic dejunuri
        delicioase și gustări ușoare până la deserturi decadente, fiecare
        preparat este creat pentru a-ți răsfăța simțurile.
      </p>
      <p className="inter-font ">
        Indiferent dacă ești în căutarea unui prânz savuros, a unei cine
        relaxante sau doar a unei gustări rapide alături de o cafea excelentă,
        la Altceva vei găsi mereu ceva pe placul tău.
      </p>
      <ImageCard image={assets.BrunchFor2} className="footer-img" />
      <h4 className="playfair-display-font">💡 Recomandările noastre:</h4>
      <ul className="inter-font ">
        <li>Bowl-uri sănătoase și pline de energie. 🥗</li>
        <li>Sandwich-uri gourmet, perfecte pentru orice moment al zilei. 🥪</li>
        <li>Deserturi care îți îndulcesc ziua, proaspăt pregătite. 🍰</li>
      </ul>
      <h5 className="playfair-display-font">
        Te așteptăm să transformi fiecare masă într-o experiență memorabilă! 🥂
      </h5>
    </div>
  );
}
