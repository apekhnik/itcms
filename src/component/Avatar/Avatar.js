import React from "react";
import style from "./Avatar.module.css";

const Avatar = ({ src, size }) => {
  const imgSize = size === "min" ? { width: "70px", height: "70px" } : {};
  return (
    <div className={style.avatar}>
      <img src={src} alt="" style={imgSize} />
    </div>
  );
};
export default Avatar;
