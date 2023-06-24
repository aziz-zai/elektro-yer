import React from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import logo from "../assets/elektro.png";
import "./Styling.css";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <img className="navbar-logo" src={logo} alt="logo" />
        <div className="navbar-btns">
          <button className="navbar-btn">
            <BsTelephoneForwardFill size={22} />
            <p className="navbar-btn-p">0711 34217995</p>
          </button>
          <button className="navbar-btn2">
            <GrMail size={22} />
            <p>info@elektro-yer.de</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
