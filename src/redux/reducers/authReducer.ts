import { authApi } from "../../API/api";
import { stopSubmit } from "redux-form";
const SET_USER_DATA = "SET_USER_DATA",
  SET_CAPTCHA = "SET_CAPTCHA";
type initialStateType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
  captcha: string | null
};
type setActionCaptchaType = {
  type: typeof SET_CAPTCHA
  payload: string
}
type setUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: userDataPayloadType
}
type userDataPayloadType = {
  id: number
  email: string
  login: string
  isAuth?: boolean
}
const initialState: initialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null,
};
const authReducer = (state = initialState, action: setActionCaptchaType | setUserDataActionType): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.payload,
      };
    default:
      break;
  }
  return state;
};
const setUserAuthData = (data: userDataPayloadType, isAuth: boolean): setUserDataActionType => {
  const { id, email, login } = data;
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};
const captchaSuccess = (captcha: string): setActionCaptchaType => ({ type: SET_CAPTCHA, payload: captcha });
export const getAuthDataFromApi = () => (dispatch: any): void => {
  return authApi
    .auth()
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserAuthData(response.data.data, true));
      }
    })
    .catch((e) => console.error(e));
};
export const userLogin = (login) => (dispatch: any): void => {
  let action = stopSubmit("login", { _error: "Wrong email or password" });
  authApi.login(login).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuthDataFromApi());
    } else if (response.data.resultCode === 10) {
      dispatch(getCaptcha());
    } else {
      dispatch(action);
    }
  });
};
export const getCaptcha = () => (dispatch: any): void => {
  authApi.getCaptcha().then((res) => {
    console.log(res.data.url);
    dispatch(captchaSuccess(res.data.url));
  });
};
export const userLogout = () => (dispatch: any): void => {
  authApi.logout().then((response) => {
    if (response.data.resultCode === 0) {
      const logout = { id: null, email: null, login: null };
      dispatch(setUserAuthData(logout, false));
    }
  });
};
export default authReducer;
