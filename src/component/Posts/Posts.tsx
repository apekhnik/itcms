import React from "react";
import Post from "./Post";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../forms/form-controls/Textarea";
// import { required, maxLength } from "../../forms/form-validator/validator";
import style from "./Post.module.css";
import {PostItemType} from '../../redux/reducers/profilePageReducer'
type PostsPropsType = {
  posts: Array<PostItemType>
  addPost:(data: PostItemType)=>void
  inputTextChange:(value:string)=>void
  inputPostText: string
}
const Posts:React.FC<PostsPropsType> = ({ posts, addPost, inputTextChange, inputPostText }) => {
  const postListElement = posts.map((p) => <Post text={p.text} key={p.id} />);
  // const onInputPostChange = (e) => inputTextChange(e.target.value);
  const onSubmit = (data: PostItemType) => {
    addPost(data);
  };
  return (
    <div>
      //@ts-ignore
      <PostReduxForm inputPostText={inputPostText} onSubmit={onSubmit} />
      {postListElement}
    </div>
  );
};
//@ts-ignore
const postForm = (props) => (
  <form onSubmit={props.handleSubmit} className={style.postForm}>
    <Field
      placeholder={"Enter your post"}
      component={Textarea}
      name={"post"}
      send={props.addPost}
      value={props.inputPostText}
      validate={[]}
    />
  </form>
);
const PostReduxForm = reduxForm({ form: "posts" })(postForm);
export default Posts;
