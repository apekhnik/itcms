import { getAuthDataFromApi } from "./authReducer";
const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS",
  SET_INITIALIZED_FAILED = "SET_INITIALIZED_FAILED";

const initialState = {
  initialized: false,
};
const appReducer = (state = initialState, action) => {
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
const initializedSuccess = () => ({ type: SET_INITIALIZED_SUCCESS });
export const dischargeInitialized = () => ({ type: SET_INITIALIZED_FAILED });
export const setInitialized = () => (dispatch) => {
  let initPromise = dispatch(getAuthDataFromApi());
  initPromise.then((res) => dispatch(initializedSuccess()));
};
export default appReducer;
