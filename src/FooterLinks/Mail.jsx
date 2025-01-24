import React from "react";

import "../shared/UIElements/Footer.css";

function EmailButton() {
  return (
    <div className="mail-box">
      <a
        className="social-link"
        href="mailto:lidiamititelu@icloud.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about..."
      >
        Email Us
      </a>
    </div>
  );
}

export default EmailButton;
