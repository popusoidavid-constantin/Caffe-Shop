import React from "react";
import "./SideDrawer.css";

export default function SideDrawer(props) {
  return (
    <div className="side-drawer__container" onClick={props.onClick}>
      {props.children}
    </div>
  );
}
