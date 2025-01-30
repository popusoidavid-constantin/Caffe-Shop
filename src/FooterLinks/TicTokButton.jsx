import "../shared/UIElements/Footer.css";

import tiktokIcon from "../assets/images/tik-tok.png";

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
        <img src={tiktokIcon} className="footer-fav-icon" alt="" />
      </a>
    </div>
  );
}
