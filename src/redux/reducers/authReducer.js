import {} from "../type";
const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      console.log(action.payload);
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
