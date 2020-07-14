import { SEND_NEW_MSG, ON_NEW_MSG_BODY_CHANGE } from "../type";
const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Шура",
    },
    {
      id: 2,
      name: "Даша",
    },
    {
      id: 3,
      name: "Маша",
    },
    {
      id: 4,
      name: "Вероника",
    },
  ],
  messages: ["yo", "qu", "hi"],
  newMessageBody: "",
};
const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_NEW_MSG_BODY_CHANGE: {
      return {
        ...state,
        newMessageBody: action.payload,
      };
    }
    case SEND_NEW_MSG: {
      let newMsg = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, newMsg],
        newMessageBody: "",
      };
    }
    default:
      break;
  }
  return state;
};
export default dialogsPageReducer;
