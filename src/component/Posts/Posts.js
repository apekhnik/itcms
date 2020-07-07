import React from "react";
import Post from "./Post";
const Posts = ({ postList, addPost, textChangeHandler, inputValue }) => {
  const postListElement = postList.map((p) => (
    <Post text={p.text} key={p.id} />
  ));
  return (
    <div>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            addPost();
          }}
        >
          <input type="text" onChange={textChangeHandler} value={inputValue} />
        </form>
      </div>
      {postListElement}
    </div>
  );
};
export default Posts;
