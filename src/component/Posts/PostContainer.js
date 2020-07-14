import Posts from "./Posts";
import {
  addPostAction,
  inputTextChangeAction,
} from "../../redux/actionCreator";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    inputPostText: state.profilePage.inputPostText,
    posts: state.profilePage.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAction());
    },
    inputTextChange: (text) => {
      dispatch(inputTextChangeAction(text));
    },
  };
};
const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer;
