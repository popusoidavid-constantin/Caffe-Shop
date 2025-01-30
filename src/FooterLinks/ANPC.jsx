import "../shared/UIElements/Footer.css";
import anpcIcon from "../assets/images/local_police_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
const ANPC = () => {
  return (
    <div className="footer-link-box">
      <a className="social-link" href="">
        ANPC <img src={anpcIcon} className="footer-google-icon" alt="" />
      </a>
    </div>
  );
};

export default ANPC;
