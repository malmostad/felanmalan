import { combineReducers } from "redux";

import uiReducer from "./ui";
import reportReducer from "./report";
import issueStatus from "./issueStatus";

export default combineReducers({
  ui: uiReducer,
  report: reportReducer,
  issueStatus
});
