import { useState } from "react";
import { NavLink } from "react-router-dom";

import LogoALTCV from "../../assets/images/LogoALTCV.png";

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
          <div className="logo-container">
            <NavLink to="/">
              <img className="logo" src={LogoALTCV}></img>
            </NavLink>
          </div>
          <div className="program-div">
            <h4>PROGRAM:</h4>
            <h5>L-V: 09-18</h5>
          </div>
        </MainHeader>
      </>
    </>
  );
}
