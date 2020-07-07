import React from "react";
import Post from "./Post";
import Input from "../Input/Input";
const Posts = ({ postList, addPost, textChangeHandler, inputValue }) => {
  const postListElement = postList.map((p) => (
    <Post text={p.text} key={p.id} />
  ));
  return (
    <div>
      <Input
        send={addPost}
        inputValue={inputValue}
        textChangeHandler={textChangeHandler}
      />
      {postListElement}
    </div>
  );
};
export default Posts;
