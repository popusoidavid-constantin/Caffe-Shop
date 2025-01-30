import "../shared/UIElements/Footer.css";
import facebookIcon from "../assets/images/facebook.png";

export default function FacebookButton() {
  return (
    <div className="footer-link-box">
      <a
        href="https://www.facebook.com/altcevacaffebacau/?locale=ro_RO"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
        <img src={facebookIcon} className="footer-fav-icon" alt="" />
      </a>
    </div>
  );
}
