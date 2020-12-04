import Posts from "./Posts";
import {
  addPost,
  inputTextChange,
} from "../../redux/reducers/profilePageReducer";
import { connect } from "react-redux";
import {AppstateType} from '../../redux/store'
import {PostItemType} from '../../redux/reducers/profilePageReducer'
const mapStateToProps = (state) => {
  return {
    inputPostText: state.profilePage.inputPostText,
    posts: state.profilePage.posts,
  };
};
// type MapStateType = {
//   inputPostText: string
//   posts: Array<PostItemType>
// }
// type MapDispatchType = {}

export default connect(mapStateToProps, { addPost, inputTextChange })(Posts);
