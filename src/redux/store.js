import { createStore, combineReducers } from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialogsPageReducer from "./reducers/dialogsPageReducer";
import userReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogsPageReducer,
  usersPage: userReducer,
  auth: authReducer,
});
const store = createStore(rootReducer);
export default store;
