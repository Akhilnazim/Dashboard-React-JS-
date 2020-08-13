import React from "react";
import "./Centre.css";

function Centre() {
  return (
    <div>
      <div className="top-side"></div>
      <div className="center">
        <div className="center-left"></div>
        <div className="center-right"></div>
      </div>
      <div className="bottom-side">
        <button className="left-btn"></button>
        <button className="centre-btn"></button>
        <button className="right-btn"></button>
      </div>
    </div>
  );
}

export default Centre;
