import React from "react";
import "./main.css";

const Main = (props) => {
  return (
    <div  className={props.day + " main"}>
      <div className="main-data">
        {props.dataCity ? (
          <p>{props.day}{" "}
            {props.currentData.slice(0, 7)}
            <span className={props.partOfTheDay} >{props.currentData.slice(12, 21)}</span>
          </p>
        ) : null}
      </div>
      <div className="main-part">
        {props.dataCity ? <p className={props.partOfTheDay}>{props.feels}°C</p> : null}
      </div>
      <div className="main-part">
        {props.dataCity ? <p className={props.partOfTheDay}>{props.wind} m/s</p> : null}
      </div>
      <div className="main-description">
        {props.dataCity ? <img src={props.icon} alt="icon" /> : null}
      </div>
    </div>
  );
};

export default Main;
