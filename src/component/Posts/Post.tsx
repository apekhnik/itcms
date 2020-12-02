import React from "react";
import style from "./Post.module.css";

const Post:React.FC<{text:string}> = ({ text }) => {
  return (
    <div className={style.post}>
      <img
        src="https://horrorzone.ru/uploads/_gallery/45123/megan-fox06.jpg"
        alt=""
      />
      {text}
    </div>
  );
};
export default Post;
