import {
  ADD_POST,
  ON_INPUT_TEXT_CHANGE,
  ON_NEW_MSG_BODY_CHANGE,
  SEND_NEW_MSG,
  FOLLOW,
  UNFOLLOW,
} from "./type";
export const addPostAction = () => {
  return {
    type: ADD_POST,
  };
};
export const inputTextChangeAction = (text) => {
  return {
    type: ON_INPUT_TEXT_CHANGE,
    payload: text,
  };
};
export const inputNewMsgAction = (msg) => {
  return {
    type: ON_NEW_MSG_BODY_CHANGE,
    payload: msg,
  };
};
export const sendNewMsgAction = () => {
  return {
    type: SEND_NEW_MSG,
  };
};
export const followUserAction = (id) => {
  return {
    type: FOLLOW,
    payload: id,
  };
};
export const unFollowUserAction = (id) => {
  return {
    type: UNFOLLOW,
    payload: id,
  };
};
