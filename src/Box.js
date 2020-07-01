import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Translate from "./Translate";
const Box = ({ children }) => {
  const [inProp, setInprop] = React.useState(false);
  const [inProp1, setInprop1] = React.useState(false);
  const [data, setDate] = useState([]);
  TODO: fetch("https://edamam-recipe-search.p.rapidapi.com/search?q=eggs", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
      "x-rapidapi-key": "c89cd05fadmsh4b125323b9113c2p19e49cjsn08584d341fc0",
    },
  })
    .then((response) => response.json())
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
  const n = Translate;
  console.log(n(), "dfdf");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "50%",
        height: "50vh",
      }}
    >
      <button
        onClick={() => {
          setInprop((cur) => !cur);
          console.log(inProp);
        }}
        children="1"
      />
      <button
        onClick={() => {
          setInprop1((cur) => !cur);
          console.log(inProp);
        }}
        children="2"
      />
      <CSSTransition in={inProp} classNames="my-node">
        <div>{"I'll receive 1"}</div>
      </CSSTransition>
      <CSSTransition in={inProp1} classNames="my-node">
        <div>{"I'll receive 2"}</div>
      </CSSTransition>
    </div>
  );
};
export default Box;
