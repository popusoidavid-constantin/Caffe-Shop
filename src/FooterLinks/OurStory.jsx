import { assets } from "../assets/assets";
import "../shared/UIElements/Footer.css";
const OurStory = () => {
  return (
    <div className="footer-link-box">
      <a className="social-link" href="">
        Our Story{" "}
        <img
          src={assets.story_icon}
          className="footer-google-icon"
          alt="Altceva Caffe Bacau Story"
        />
      </a>
    </div>
  );
};

export default OurStory;
