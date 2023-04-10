import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";

// Combine all reducers here
const rootReducer =  combineReducers({
  userReducer,
});

export default rootReducer;