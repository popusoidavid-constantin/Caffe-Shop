import React from "react";
import { assets } from "../assets/assets";

import "../shared/UIElements/Footer.css";

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
        <img
          src={assets.facebook_icon}
          className="footer-fav-icon"
          alt="Altceva Caffe Bacau Facebook"
        />
      </a>
    </div>
  );
}
