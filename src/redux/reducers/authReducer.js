import { authApi } from "../../API/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "SET_USER_DATA",
      SET_CAPTCHA = 'SET_CAPTCHA';
      type InitialState = {
        id: number,
  login: null,
  email: null,
  isAuth: false,
  captcha: null
      }
const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      }
    case SET_CAPTCHA:
      return{
        ...state,
        captcha: action.payload
      }
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
const captchaSuccess = (captcha) => ({type:SET_CAPTCHA, payload: captcha})
export const getAuthDataFromApi = () => (dispatch) => {
  return authApi
    .auth()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(response.data.data, true));
      }
    })
    .catch((e) => console.error(e));
};
export const userLogin = (login) => (dispatch) => {
  let action = stopSubmit("login", { _error: "Wrong email or password" });
  console.log(login)
  authApi.login(login).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthDataFromApi());
    }else if(response.data.resultCode === 10){
      dispatch(getCaptcha())
    } else {
      dispatch(action);
    }
  });
};
export const getCaptcha = () => (dispatch) => {
  authApi.getCaptcha().then(res=>{
    console.log(res.data.url)
    dispatch(captchaSuccess(res.data.url))
  })
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
