import React from "react";

import "../shared/UIElements/Footer.css";

function EmailButton() {
  return (
    <div className="mail-box">
      <a
        className="social-link"
        href="mailto:altcevacaffe@yahoo.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20reserve%20a%20table%for%tonight"
      >
        Email Us
      </a>
    </div>
  );
}

export default EmailButton;
