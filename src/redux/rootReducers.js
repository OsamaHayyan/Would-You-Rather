import { combineReducers } from "redux";
import { userId, userData, questionData } from "./reducer";
const rootReducer = combineReducers({
  userId,
  userData,
  questionData,
});

export default rootReducer;
