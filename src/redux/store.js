import { createStore, combineReducers } from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialogsPageReducer from "./reducers/dialogsPageReducer";
import userReducer from "./reducers/usersReducer";
const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogsPageReducer,
  usersPage: userReducer,
});
const store = createStore(rootReducer);
export default store;
