import {
  CREATE_REPORT_FAILURE,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT
} from "../action-types";

const initialState = {
  images: [],
  sendingState: "none"
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REPORT:
      return { ...state, sendingState: "pending" };
    case CREATE_REPORT_FAILURE:
      return { ...state, sendingState: "failure" };
    case CREATE_REPORT_SUCCESS:
      return { ...state, sendingState: "none" };
    default:
      return state;
  }
};
export default uiReducer;
