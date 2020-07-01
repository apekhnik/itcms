import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const state = {
  dialogs: [
    {
      id: 1,
      name: "Шура",
    },
    {
      id: 2,
      name: "Даша",
    },
    {
      id: 3,
      name: "Маша",
    },
    {
      id: 4,
      name: "Вероника",
    },
  ],
  messages: ["yo", "qu", "hi"],
};
const app = (
  <BrowserRouter>
    <App state={state} />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
