import React from "react";
import Account from "../Account/Account";
import Posts from "../Posts/Posts";
import Post from "../Posts/Post";
const Profile = ({ posts, inputPost, dispatch }) => {
  const postList = posts.map((p) => <Post text={p.text} key={p.id} />);
  return (
    <div>
      <Account />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_POST" });
        }}
      >
        <input
          onChange={(e) =>
            dispatch({ type: "ON_INPUT_TEXT_CHANGE", payload: e.target.value })
          }
          value={inputPost}
        />
      </form>
      <Posts>{postList}</Posts>
    </div>
  );
};
export default Profile;
