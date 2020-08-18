import { createStore, combineReducers, applyMiddleware } from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialogsPageReducer from "./reducers/dialogsPageReducer";
import userReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogsPageReducer,
  usersPage: userReducer,
  auth: authReducer,
  form: formReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
