import {} from "../type";

import { authApi } from "../../API/api";
const SET_USER_DATA = "SET_USER_DATA";
const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: true,
      };
    default:
      break;
  }
  return state;
};
const setUserAuthData = (data) => ({ type: SET_USER_DATA, payload: data });
export const setAuthData = () => (dispatch) => {
  authApi
    .auth()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(response.data.data));
      }
    })
    .catch((e) => console.error(e));
};
export default authReducer;
