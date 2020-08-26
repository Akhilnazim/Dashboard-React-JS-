import React from "react";
import "./Centre.css";
import Leftcontent from "./Leftcontent"

function Centre() {
  return (
    <div className="top">
      <div className="top-side">
        <div className="heading">
        <h1 style={{color:"red"}}>Welcome back Anna!</h1>
        </div>
      </div>
      <div className="center">
        <div className="center-left">
          <Leftcontent />
        </div>
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
