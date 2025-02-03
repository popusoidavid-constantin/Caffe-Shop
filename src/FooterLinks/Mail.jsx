import { assets } from "../assets/assets";
import "../shared/UIElements/Footer.css";

function EmailButton() {
  return (
    <div className="footer-link-box">
      <a
        className="social-link"
        href="mailto:altcevacaffe@yahoo.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20reserve%20a%20table%for%tonight"
      >
        Email Us
        <img
          src={assets.mail_icon}
          className="footer-google-icon"
          alt="Altceva Caffe Bacau Email"
        />
      </a>
    </div>
  );
}

export default EmailButton;
