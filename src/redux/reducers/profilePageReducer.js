import { ADD_POST, ON_INPUT_TEXT_CHANGE } from "../type";
const initialState = {
  inputPostText: "",
  posts: [
    { id: 1, text: "test1" },
    { id: 2, text: "test2" },
    { id: 3, text: "test3" },
  ],
  profile: {
    "aboutMe": "я круто чувак 1001%",
    "contacts": {
      "facebook": "facebook.com",
      "website": null,
      "vk": "vk.com/dimych",
      "twitter": "https://twitter.com/@sdf",
      "instagram": "instagra.com/sds",
      "youtube": null,
      "github": "github.com",
      "mainLink": null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": "не ищу, а дурачусь",
    "fullName": "samurai dimych",
    "userId": 2,
    "photos": {
      "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
      "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
  }
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
    case 'SET_CURRENT_PROFILE':
      return {
        ...state,
        profile: action.payload
      }
    default:
      break;
  }
  return state;
};
export default profilePageReducer;
