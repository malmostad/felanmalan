import {
  FETCH_ISSUE_STATUS,
  FETCH_ISSUE_STATUS_SUCCESS
} from "../action-types";

const initialState = {
  loading: true
};
const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ISSUE_STATUS:
      return { ...state, loading: true };
    case FETCH_ISSUE_STATUS_SUCCESS:
      const { payload = {} } = action;
      return { ...state, ...payload, loading: false };
    default:
      return state;
  }
};

export default reportReducer;
