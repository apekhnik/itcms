import React from "react";
import Posts from "./Posts";
import {
  addPostAction,
  inputTextChangeAction,
} from "../../redux/actionCreator";
const PostContainer = ({ store }) => {
  const state = store.getState();
  const postList = state.profilePage.posts;
  const addPost = () => {
    store.dispatch(addPostAction());
  };
  const onInputTextChangeHandler = (e) => {
    store.dispatch(inputTextChangeAction(e.target.value));
  };
  return (
    <Posts
      postList={postList}
      inputValue={state.profilePage.inputPostText}
      addPost={addPost}
      textChangeHandler={onInputTextChangeHandler}
    />
  );
};
export default PostContainer;
