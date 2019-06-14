import {
  CREATE_REPORT_FAILURE,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT,
  GET_ADDRESS_SUCCESS,
  UI_MAP_SCREEN_CLICKED
} from "../action-types";

const initialState = {
  mapScreenClicked: false,
  sendingState: "none",
  address: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_MAP_SCREEN_CLICKED:
      return { ...state, mapScreenClicked: true };
    case CREATE_REPORT:
      return { ...state, sendingState: "pending" };
    case CREATE_REPORT_FAILURE:
      return { ...state, sendingState: "failure" };
    case CREATE_REPORT_SUCCESS:
      return { ...state, sendingState: "none" };
    case GET_ADDRESS_SUCCESS:
      const { payload = {} } = action;
      return { ...state, address: payload.address };
    default:
      return state;
  }
};
export default uiReducer;
