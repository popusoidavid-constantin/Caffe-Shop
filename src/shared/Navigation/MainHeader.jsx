import React from "react";
import "./MainHeader.css";

export default function MainHeader(props) {
  return (
    <header id="main-header" className="main-header">
      {props.children}
    </header>
  );
}
