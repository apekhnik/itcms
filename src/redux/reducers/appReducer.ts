import { getAuthDataFromApi } from "./authReducer";
import {Dispatch} from 'redux'
import { AppstateType } from "../store";
import { ThunkAction } from "redux-thunk";
const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS",
  SET_INITIALIZED_FAILED = "SET_INITIALIZED_FAILED";
type initialStateType = {
  initialized: boolean
}
const initialState: initialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: InitializedActionsType): initialStateType => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case SET_INITIALIZED_FAILED:
      return {
        ...state,
        initialized: false,
      };
    default:
      break;
  }
  return state;
};
type InitializedActionsType = InitializedSuccessActionType | DischargeInitializedType
type InitializedSuccessActionType = {
  type: typeof SET_INITIALIZED_SUCCESS
}
const initializedSuccess = (): InitializedSuccessActionType => ({ type: SET_INITIALIZED_SUCCESS });
type DischargeInitializedType = {
  type: typeof SET_INITIALIZED_FAILED
}
export const dischargeInitialized = (): DischargeInitializedType => ({ type: SET_INITIALIZED_FAILED });

export const setInitialized = () => (dispatch: Dispatch<InitializedActionsType>, getState: AppstateType): void => {
  //@ts-ignore
  let initPromise = dispatch(getAuthDataFromApi());
  //@ts-ignore
  initPromise.then((res: any) => dispatch(initializedSuccess()));
};
export default appReducer;
