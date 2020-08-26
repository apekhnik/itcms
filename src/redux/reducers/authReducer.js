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
      };
    default:
      break;
  }
  return state;
};
const setUserAuthData = (data, isAuth) => {
  const { id, email, login } = data;
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};
export const getAuthDataFromApi = () => (dispatch) => {
  authApi
    .auth()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(response.data.data, true));
      }
    })
    .catch((e) => console.error(e));
};
export const userLogin = (login) => (dispatch) => {
  authApi.login(login).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthDataFromApi());
    }
  });
};
export const userLogout = () => (dispatch) => {
  authApi.logout().then((response) => {
    if (response.data.resultCode === 0) {
      const logout = { id: null, email: null, login: null };
      dispatch(setUserAuthData(logout, false));
    }
  });
};
export default authReducer;
