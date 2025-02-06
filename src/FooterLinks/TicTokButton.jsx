import React from "react";
import { assets } from "../assets/assets";
import "../shared/UIElements/Footer.css";

export default function TikTokButton() {
  return (
    <div className="footer-link-box">
      <a
        href="https://www.tiktok.com/@altceva_caffe"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        TikTok
        <img
          src={assets.tiktok_icon}
          className="footer-fav-icon"
          alt="Altceva Caffe Bacau TikTok"
        />
      </a>
    </div>
  );
}
