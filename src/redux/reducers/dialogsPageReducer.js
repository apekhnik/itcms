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
      let newState = { ...state };
      newState.newMessageBody = action.payload;
      return newState;
    }
    case SEND_NEW_MSG: {
      let newState = { ...state };
      newState.messages.push(state.newMessageBody);
      newState.newMessageBody = "";
      return newState;
    }
    default:
      break;
  }
  return state;
};
export default dialogsPageReducer;
