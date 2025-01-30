import callIcon from "../assets/images/call_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";

import "../shared/UIElements/Footer.css";
function CallButton() {
  return (
    <div className="footer-link-box">
      <a className="social-link" href="tel:0758848596">
        Call Us
        <img src={callIcon} className="footer-google-icon" alt="" />
      </a>
    </div>
  );
}

export default CallButton;
