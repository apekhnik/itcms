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
      let post = {
        id: state.posts.length + 1,
        text: state.inputPostText,
      };
      return {
        ...state,
        posts: [...state.posts, post],
        inputPostText: "",
      };
    }
    case ON_INPUT_TEXT_CHANGE: {
      return {
        ...state,
        inputPostText: action.payload,
      };
    }
    default:
      break;
  }
  return state;
};
export default profilePageReducer;
