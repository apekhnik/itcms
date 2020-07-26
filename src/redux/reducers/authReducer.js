import {} from "../type";
const initialState = {
  id: 1000,
  login: "emelya",
  email: "ss",
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
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
export default authReducer;
