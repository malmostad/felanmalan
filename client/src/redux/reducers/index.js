import { combineReducers } from "redux";

import uiReducer from "./ui";
import reportReducer from "./report";

export default combineReducers({
  ui: uiReducer,
  report: reportReducer
});
