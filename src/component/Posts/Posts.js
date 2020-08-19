import React from "react";
import Post from "./Post";
import { Field, reduxForm } from "redux-form";
const Posts = ({ posts, addPost, inputTextChange, inputPostText }) => {
  const postListElement = posts.map((p) => <Post text={p.text} key={p.id} />);
  // const onInputPostChange = (e) => inputTextChange(e.target.value);
  const onSubmit = (data) => {
    addPost(data);
  };
  return (
    <div>
      <PostReduxForm inputPostText={inputPostText} onSubmit={onSubmit} />
      {postListElement}
    </div>
  );
};
const postForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <Field
      placeholder={"Enter your text"}
      component={"input"}
      name={"post"}
      className={"1"}
      send={props.addPost}
      value={props.inputPostText}
    />
  </form>
);
const PostReduxForm = reduxForm({ form: "posts" })(postForm);
export default Posts;
