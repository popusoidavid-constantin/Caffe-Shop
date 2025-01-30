import "../shared/UIElements/Footer.css";
import storyIcon from "../assets/images/history_edu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png";
const OurStory = () => {
  return (
    <div className="footer-link-box">
      <a className="social-link" href="">
        Our Story <img src={storyIcon} className="footer-google-icon"alt="" />
      </a>
    </div>
  );
};

export default OurStory;
