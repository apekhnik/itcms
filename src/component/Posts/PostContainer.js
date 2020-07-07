import React from "react";
import Posts from "./Posts";
import {
  addPostAction,
  inputTextChangeAction,
} from "../../redux/actionCreator";
const PostContainer = ({ store }) => {
  const state = store.getState();

  const { posts, inputPostText } = state.profilePage;
  const addPost = () => {
    store.dispatch(addPostAction());
  };
  const onInputTextChangeHandler = (e) => {
    store.dispatch(inputTextChangeAction(e.target.value));
  };
  return (
    <Posts
      postList={posts}
      inputValue={inputPostText}
      addPost={addPost}
      textChangeHandler={onInputTextChangeHandler}
    />
  );
};
export default PostContainer;
