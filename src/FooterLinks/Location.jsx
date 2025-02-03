import { assets } from "../assets/assets";

import "../shared/UIElements/Footer.css";
export default function LocationButton() {
  return (
    <div className="footer-link-box">
      <a
        href="https://www.google.com/maps/place/Altceva+caffe/@46.5794037,26.9110971,17z/data=!3m1!4b1!4m6!3m5!1s0x40b56fe922719399:0xc5719b48737e763e!8m2!3d46.5794!4d26.913672!16s%2Fg%2F11h1rt0kpr?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Location
        <img src={assets.location_icon} className="footer-google-icon" alt="" />
      </a>
    </div>
  );
}
