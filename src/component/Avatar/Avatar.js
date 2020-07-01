import React from "react";
import style from "./Avatar.module.css";

const Avatar = ({ src }) => {
  return (
    <div className={style.avatar}>
      <img src={src} alt="" />
    </div>
  );
};
export default Avatar;
