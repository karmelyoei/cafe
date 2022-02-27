import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const websocketURL = "wss://09ee4ec2aa.a91ad78fad90f2d5aa4f51e0.com";
const audioEnabled = true;
const userIcon = require("./assets/person.png");
const closeIcon = require("./assets/close.png");
const sendIcon = require("./assets/send.png");
const widgetIcon = require("./assets/cafe.png");

ReactDOM.render(
  <React.StrictMode>
    <App
      websocketURL={websocketURL}
      audioEnabled={audioEnabled}
      userIcon={userIcon}
      closeIcon={closeIcon}
      sendIcon={sendIcon}
      widgetIcon={widgetIcon}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
