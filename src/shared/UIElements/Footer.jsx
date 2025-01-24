import FacebookButton from "../../FooterLinks/FacebookButton";
import "./Footer.css";
import InstagramButton from "../../FooterLinks/InstagramButton";
import CallButton from "../../FooterLinks/Call";
import EmailButton from "../../FooterLinks/Mail";
import TikTokButton from "../../FooterLinks/TicTokButton";
import LocationButton from "../../FooterLinks/Location";


export default function Footer() {
  return (
    <div className="footer-container">
      <div className="links-div">
        <h3 className="footer-h3">Useful Links</h3>
        <hr />
        <ul>
          <li>Our Story</li>
          <LocationButton />
          <li>ANPC</li>
        </ul>
      </div>
      <div className="contact-div">
        <h3 className="footer-h3">Contact Us</h3>
        <hr />
        <ul>
          <li>
            <CallButton />
          </li>
          <li>
            <EmailButton />
          </li>
          <li>
            <LocationButton />
          </li>
        </ul>
      </div>
      <div className="socialmedia-div">
        <h3 className="footer-h3">Social Media</h3>
        <hr />
        <ul>
          <li>
            <InstagramButton />
          </li>
          <li>
            <FacebookButton />
          </li>
          <li>
            <TikTokButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
