import React from "react";
import Account from "../Account/Account";
import Posts from "../Posts/Posts";
import Post from "../Posts/Post";
const Profile = ({ posts, addPost, inputPost, onInputTextChange }) => {
  const postList = posts.map((p) => <Post text={p.text} key={p.id} />);
  return (
    <div>
      <Account />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost(inputPost);
        }}
      >
        <input
          onChange={(e) => onInputTextChange(e.target.value)}
          value={inputPost}
        />
      </form>
      <Posts>{postList}</Posts>
    </div>
  );
};
export default Profile;
