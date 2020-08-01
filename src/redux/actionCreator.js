import {
  ADD_POST,
  ON_INPUT_TEXT_CHANGE,
  ON_NEW_MSG_BODY_CHANGE,
  SEND_NEW_MSG,
  FOLLOW,
  UNFOLLOW,
  SET_USERS,
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
export const follow = (id) => {
  return {
    type: FOLLOW,
    payload: id,
  };
};
export const unfollow = (id) => {
  return {
    type: UNFOLLOW,
    payload: id,
  };
};
export const setUsers = (data) => {
  return {
    type: SET_USERS,
    payload: data,
  };
};
export const setCurrentPage = (p) => {
  return { type: "SET_CURRENT_PAGE", payload: p };
};
export const followToggle = (b) => {
  console.log("hello i am AC T");
  return {
    type: "TOGGLE",
    payload: b,
  };
};
export const fetchingToggler = (t) => {
  return { type: "LOADING_TOGGLER", payload: t };
};
export const followingInProgressToggler = (f, id) => {
  return { type: "FOLOWING_IN_PROGRESS", payload: { f, id } };
};
