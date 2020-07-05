import React from "react";
import Account from "../Account/Account";
import Posts from "../Posts/Posts";
import Post from "../Posts/Post";
import {
  addPostAction,
  inputTextChangeAction,
} from "../../redux/actionCreator";
const Profile = ({ posts, inputPost, dispatch }) => {
  const postList = posts.map((p) => <Post text={p.text} key={p.id} />);
  const addPost = (e) => {
    e.preventDefault();
    dispatch(addPostAction());
  };
  const onInputTextChange = (e) => {
    dispatch(inputTextChangeAction(e.target.value));
  };
  return (
    <div>
      <Account />
      <form onSubmit={addPost}>
        <input onChange={onInputTextChange} value={inputPost} />
      </form>
      <Posts>{postList}</Posts>
    </div>
  );
};
export default Profile;
