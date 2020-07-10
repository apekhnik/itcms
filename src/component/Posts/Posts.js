import React from "react";
import Post from "./Post";
import Input from "../Input/Input";
const Posts = ({ posts, addPost, inputTextChange, inputPostText }) => {
  const postListElement = posts.map((p) => <Post text={p.text} key={p.id} />);
  const onInputPostChange = (e) => inputTextChange(e.target.value);
  return (
    <div>
      <Input
        send={addPost}
        inputValue={inputPostText}
        textChangeHandler={onInputPostChange}
      />
      {postListElement}
    </div>
  );
};
export default Posts;
