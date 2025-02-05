import { assets } from "../assets/assets";

import "../shared/UIElements/Footer.css";
const ANPC = () => {
  return (
    <div className="footer-link-box">
      <a className="social-link" href="">
        ANPC{" "}
        <img
          alt="Altceva Caffe Bacau ANPC"
          src={assets.anpc_icon}
          className="footer-google-icon"
        />
      </a>
    </div>
  );
};

export default ANPC;
