import { combineReducers } from "redux";

import uiReducer from "./ui";
import reportReducer from "./report";
import issueStatus from "./issueStatus";
import texts from "./texts";
import visits from "./visits";

export default combineReducers({
  ui: uiReducer,
  report: reportReducer,
  texts,
  visits,
  issueStatus
});
