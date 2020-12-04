import { authApi } from "../../API/api";
import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { AppstateType } from "../store";
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
  id: number | null
  email: string | null
  login: string | null
  isAuth?: boolean
}
const initialState: initialStateType = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captcha: null,
};
type AuthActionsType = setActionCaptchaType | setUserDataActionType
const authReducer = (state = initialState, action: AuthActionsType): initialStateType => {
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
export type ThunkActionType = ThunkAction<Promise<void>, AppstateType, unknown, AuthActionsType>
export const getAuthDataFromApi = (): ThunkActionType => {
  return async (dispatch) => {
    try {
      let authData = await authApi.auth()
      if (authData.data.resultCode === 0) {
        dispatch(setUserAuthData(authData.data.data, true));
      }
    } catch (error) {

    }
  }
}
export type LoginData = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

export const userLogin = (login: LoginData): ThunkActionType => {
  return async (dispatch) => {
    try {
      let action = stopSubmit("login", { _error: "Wrong email or password" });
      let response = await authApi.login(login)
      if (response.data.resultCode === 0) {
        dispatch(getAuthDataFromApi());
      } else if (response.data.resultCode === 10) {
        dispatch(getCaptcha());
      } else {
        //@ts-ignore
        dispatch(action);
      }
    } catch (error) {

    }
  };
}
export const getCaptcha = (): ThunkActionType => {
  return async (dispatch) => {
    try {
      let response = await authApi.getCaptcha()
      dispatch(captchaSuccess(response.data.url));
    } catch (error) {
    }
  };
}
export const userLogout = (): ThunkActionType => {
  return async (dispatch) => {
    try {
      let response = await authApi.logout()
      if (response.data.resultCode === 0) {
        const logout = { id: null, email: null, login: null };
        dispatch(setUserAuthData(logout, false));
      }
    } catch (error) {
    }
  }
}
export default authReducer;
