import React from "react";
import "./main.css";

const Main = (props) => {
  return (
    <div className="main">
      <div className="main-data">
        {props.dataCity ? (
          <p>{props.day}{" "}
            {props.currentData.slice(0, 7)}
            <span>{props.currentData.slice(12, 21)}</span>
          </p>
        ) : null}
      </div>
      <div className="main-part">
        {props.dataCity ? <p>{props.feels}°C</p> : null}
      </div>
      <div className="main-part">
        {props.dataCity ? <p>{props.wind} m/s</p> : null}
      </div>
      <div className="main-description">
        {props.dataCity ? <p>{props.description}</p> : null}
      </div>
    </div>
  );
};

export default Main;
