import { assets } from "../assets/assets";

import "../shared/UIElements/Footer.css";
const ANPC = () => {
  return (
    <div className="footer-link-box">
      <a className="social-link" href="">
        ANPC{" "}
        <img src={assets.anpc_icon} className="footer-google-icon" alt="" />
      </a>
    </div>
  );
};

export default ANPC;
