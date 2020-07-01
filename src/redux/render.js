import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "../App";
import { addPost, onInputTextChange } from "./state";
const rerenderApp = (state) => {
  const app = (
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        onInputTextChange={onInputTextChange}
      />
    </BrowserRouter>
  );
  ReactDOM.render(app, document.getElementById("root"));
};
export default rerenderApp;
