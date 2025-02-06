import React from "react";
import { assets } from "../assets/assets";

import "../shared/UIElements/Footer.css";

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
        <img
          src={assets.instagram_icon}
          className="footer-fav-icon"
          alt="Altceva Caffe Bacau Instagram"
        />
      </a>
    </div>
  );
}
