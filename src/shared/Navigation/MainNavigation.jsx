import { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";

import "./MainNavigation.css";
import Backdrop from "./Backdrop";

export default function MainNavigation(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
  };
  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen ? <Backdrop onClick={closeDrawerHandler} /> : ""}
      {isDrawerOpen && (
        <SideDrawer onClick={closeDrawerHandler}>
          <NavLinks drawerRedirect={closeDrawerHandler}></NavLinks>
        </SideDrawer>
      )}
      <>
        <MainHeader backgroundStyle={props.backgroundStyle}>
          <button
            className="main-navigation__menu-btn"
            onClick={openDrawerHandler}
          >
            <span />
            <span />
            <span />
          </button>

          <NavLink to="/">
            <img
              className="logo"
              alt="Altceva Caffe Bacau Logo"
              src={assets.altceva_logo}
            ></img>
          </NavLink>
          <div className="schedule-box">
            <h4>PROGRAM:</h4>
            <h5>L-V: 09-18</h5>
          </div>
        </MainHeader>
      </>
    </>
  );
}
