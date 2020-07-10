import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

const rerenderApp = () => {
  const app = (
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  );
  ReactDOM.render(app, document.getElementById("root"));
};
store.subscribe(rerenderApp);
rerenderApp();
