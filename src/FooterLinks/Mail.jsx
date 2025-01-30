import mailIcon from "../assets/images/mail_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

import "../shared/UIElements/Footer.css";

function EmailButton() {
  return (
    <div className="footer-link-box">
      <a
        className="social-link"
        href="mailto:altcevacaffe@yahoo.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20reserve%20a%20table%for%tonight"
      >
        Email Us
        <img src={mailIcon} className="footer-google-icon" alt="" />
      </a>
    </div>
  );
}

export default EmailButton;
