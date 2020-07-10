import { createStore, combineReducers } from "redux";
import profilePageReducer from "./reducers/profilePageReducer";
import dialogsPageReducer from "./reducers/dialogsPageReducer";
const rootReducer = combineReducers({
  profilePage: profilePageReducer,
  dialogPage: dialogsPageReducer,
});
const store = createStore(rootReducer);
export default store;
