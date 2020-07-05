// import state, { addPost, onInputTextChange, subscribe } from "./redux/state";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

const rerenderApp = () => {
  const app = (
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
  ReactDOM.render(app, document.getElementById("root"));
};
store.subscribe(rerenderApp);
rerenderApp();
