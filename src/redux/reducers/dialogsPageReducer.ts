import { SEND_NEW_MSG, ON_NEW_MSG_BODY_CHANGE } from "../type";
type initialState = {
  dialogs: Array<{ id: number, name: string }>
  messages: Array<string>,
  newMessageBody: string,
}
type action = {
  type: string
  payload?: string
}
const initialState: initialState = {
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
const dialogsPageReducer = (state = initialState, action: action): initialState => {
  switch (action.type) {
    case ON_NEW_MSG_BODY_CHANGE: {
      return {
        ...state,
        newMessageBody: action.payload,
      };
    }
    case SEND_NEW_MSG: {
      let newMsg = action.payload;
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
export const sendNewMessage = (m: string): action => ({ type: SEND_NEW_MSG, payload: m });
export const messageInputChange = (msg: string): action => ({
  type: ON_NEW_MSG_BODY_CHANGE,
  payload: msg,
});
export default dialogsPageReducer;
