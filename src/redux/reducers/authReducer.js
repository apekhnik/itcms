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
export const getAuthDataFromApi = () => (dispatch) => {
  authApi
    .auth()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(response.data.data));
      }
    })
    .catch((e) => console.error(e));
};
export const userLogin = (login) => (dispatch) => {
  authApi.login(login).then((response) => console.log(response));
};
export const userLogout = () => (dispatch) => {
  authApi.logout().then((response) => console.log(response));
};
export default authReducer;
