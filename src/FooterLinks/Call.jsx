import React from "react";
import { assets } from "../assets/assets";

import "../shared/UIElements/Footer.css";
function CallButton() {
  return (
    <div className="footer-link-box">
      <a className="social-link" href="tel:0758848596">
        Call Us
        <img
          src={assets.call_icon}
          className="footer-google-icon"
          alt="Altceva Caffe Bacau Call"
        />
      </a>
    </div>
  );
}

export default CallButton;
