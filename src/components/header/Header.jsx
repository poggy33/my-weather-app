import React from "react";
import logo from "../../assets/logo.png";
import "./header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="location tracking-in-expand">
          <h1>{props.city}</h1>
        </div>
        <div className="temp tracking-in-expand">
          <h1>{props.temp} °C</h1>
        </div>
        <div className="time tracking-in-expand">
          <h2>{props.time}</h2>
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-img">
          <img className="scale-up-center" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
