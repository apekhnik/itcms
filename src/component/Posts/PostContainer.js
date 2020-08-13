import Posts from "./Posts";
import {
  addPost,
  inputTextChange,
} from "../../redux/reducers/profilePageReducer";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    inputPostText: state.profilePage.inputPostText,
    posts: state.profilePage.posts,
  };
};

export default connect(mapStateToProps, { addPost, inputTextChange })(Posts);
