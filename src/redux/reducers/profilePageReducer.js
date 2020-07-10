import { ADD_POST, ON_INPUT_TEXT_CHANGE } from "../type";
const initialState = {
  inputPostText: "",
  posts: [
    { id: 1, text: "test1" },
    { id: 2, text: "test2" },
    { id: 3, text: "test3" },
  ],
};
const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newState = { ...state };
      let post = {
        id: newState.posts.length + 1,
        text: newState.inputPostText,
      };
      newState.posts.push(post);
      newState.inputPostText = "";
      return newState;
    }
    case ON_INPUT_TEXT_CHANGE: {
      let newState = { ...state };
      newState.inputPostText = action.payload;
      return newState;
    }
    default:
      break;
  }
  return state;
};
export default profilePageReducer;
