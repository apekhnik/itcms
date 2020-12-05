import { SEND_NEW_MSG, ON_NEW_MSG_BODY_CHANGE } from "../type";
type initialState = {
  dialogs: Array<DialogItemType>
  messages: Array<string>,
  newMessageBody: string,
}
type DialogItemType = { id: number, name: string }
type action = {
  type: string
  payload: string
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
type ActionTypes = MessageInputActionType | SendMessageActiontype
const dialogsPageReducer = (state = initialState, action: ActionTypes): initialState => {
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
type SendMessageActiontype = {
  type: typeof SEND_NEW_MSG,
  payload: string
}
export const sendNewMessage = (m: string): SendMessageActiontype => ({ type: SEND_NEW_MSG, payload: m });
type MessageInputActionType = {
  type: typeof ON_NEW_MSG_BODY_CHANGE,
  payload: string
}
export const messageInputChange = (msg: string): MessageInputActionType => ({
  type: ON_NEW_MSG_BODY_CHANGE,
  payload: msg,
});
export default dialogsPageReducer;
