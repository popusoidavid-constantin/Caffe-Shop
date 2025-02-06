import React from "react";
import FacebookButton from "../../FooterLinks/FacebookButton";
import "./Footer.css";
import InstagramButton from "../../FooterLinks/InstagramButton";
import CallButton from "../../FooterLinks/Call";
import EmailButton from "../../FooterLinks/Mail";
import TikTokButton from "../../FooterLinks/TicTokButton";
import LocationButton from "../../FooterLinks/Location";
import ANPC from "../../FooterLinks/ANPC";
import OurStory from "../../FooterLinks/OurStory";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="links-div">
        <h3 className="footer-h3 playfair-display-font">Useful Links</h3>
        <hr />
        <ul className="footer-ul">
          <li>
            <OurStory />
          </li>

          <li>
            <LocationButton />
          </li>
          <li>
            <ANPC />
          </li>
        </ul>
      </div>
      <div className="links-div">
        <h3 className="footer-h3 playfair-display-font">Contact Us</h3>
        <hr />
        <ul className="footer-ul">
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
      <div className="links-div">
        <h3 className="footer-h3 playfair-display-font">Social Media</h3>
        <hr />
        <ul className="footer-ul">
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
