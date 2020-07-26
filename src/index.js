import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const rerenderApp = () => {
  const app = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  ReactDOM.render(app, document.getElementById("root"));
};
store.subscribe(rerenderApp);
rerenderApp();
