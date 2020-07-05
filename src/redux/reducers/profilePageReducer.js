import { ADD_POST, ON_INPUT_TEXT_CHANGE } from "../type";
const profilePageReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: state.posts.length + 1,
        text: state.inputPostText,
      };
      state.posts.push(post);
      state.inputPostText = "";
      break;
    case ON_INPUT_TEXT_CHANGE:
      state.inputPostText = action.payload;
      break;
    default:
      break;
  }
  return state;
};
export default profilePageReducer;
