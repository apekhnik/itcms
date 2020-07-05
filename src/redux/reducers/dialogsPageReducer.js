import { SEND_NEW_MSG, ON_NEW_MSG_BODY_CHANGE } from "../type";
const dialogsPageReducer = (state, action) => {
  switch (action.type) {
    case ON_NEW_MSG_BODY_CHANGE:
      state.newMessageBody = action.payload;
      break;
    case SEND_NEW_MSG:
      state.messages.push(state.newMessageBody);
      state.newMessageBody = "";
      break;
    default:
      break;
  }
  return state;
};
export default dialogsPageReducer;
