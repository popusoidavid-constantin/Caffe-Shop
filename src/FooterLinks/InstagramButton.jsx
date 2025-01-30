import "../shared/UIElements/Footer.css";
import instagramIcon from "../assets/images/insta.png";
export default function InstagramButton() {
  return (
    <div className="footer-link-box">
      <a
        href="https://www.instagram.com/altcevacaffe/"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
        <img src={instagramIcon} className="footer-fav-icon" alt="" />
      </a>
    </div>
  );
}
