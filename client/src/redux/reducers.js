import { REPORT_ADD } from "./action-types";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPORT_ADD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default rootReducer;
