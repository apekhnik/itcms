import { getAuthDataFromApi } from "./authReducer";
const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS",
  SET_INITIALIZED_FAILED = "SET_INITIALIZED_FAILED";
type initialState = {
  initialized: boolean
}
const initialState: initialState = {
  initialized: false,
};
type action = {
  type: string
  payload?: string
}
const appReducer = (state: initialState = initialState, action: action) => {
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
const initializedSuccess = (): action => ({ type: SET_INITIALIZED_SUCCESS });
export const dischargeInitialized = (): action => ({ type: SET_INITIALIZED_FAILED });
export const setInitialized = () => (dispatch): void => {
  let initPromise = dispatch(getAuthDataFromApi());
  initPromise.then((res: any) => dispatch(initializedSuccess()));
};
export default appReducer;
