import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const websocketURL = "ws://localhost:8082";

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
