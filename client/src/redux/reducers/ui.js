import {
  ACCEPT_COOKIES,
  CLEAR,
  CREATE_REPORT_FAILURE,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT,
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS,
  UI_LOADING_STOP,
  UI_LOADING_START,
  UI_TOUCH_CATCHER_HIDE,
  UI_TOUCH_CATCHER_SHOW,
  UI_INPUT_BLUR,
  UI_INPUT_FOCUS,
  UI_INPUT_VALIDATION
} from "../action-types";

const initialState = {
  acceptedCookies: false,
  loadingAddress: false,
  touchCatcher: false,
  sendingState: "none",
  address: false,
  inputFocus: false,
  validInput: false,
  loading: false
};

const uiReducer = (state = initialState, action) => {
  const { payload = {} } = action;

  switch (action.type) {
    case UI_INPUT_VALIDATION:
      const { isValid } = action;
      return { ...state, validInput: isValid };
    case UI_INPUT_FOCUS:
      return { ...state, inputFocus: true };
    case UI_INPUT_BLUR:
      return { ...state, inputFocus: false };
    case UI_TOUCH_CATCHER_SHOW:
      return { ...state, touchCatcher: true };
    case UI_TOUCH_CATCHER_HIDE:
      return { ...state, touchCatcher: false };
    case CREATE_REPORT:
      return { ...state, sendingState: "pending" };
    case CREATE_REPORT_FAILURE:
      return { ...state, sendingState: "failure" };
    case CREATE_REPORT_SUCCESS:
      return {
        ...state,
        external_id: payload.external_id,
        sendingState: "none"
      };
    case UI_LOADING_START:
      const { message = false } = action;
      return { ...state, loading: true, loadingMessage: message };
    case UI_LOADING_STOP:
      return { ...state, loading: false, loadingMessage: false };
    case GET_ADDRESS:
      return { ...state, loadingAddress: true };
    case GET_ADDRESS_SUCCESS:
      return { ...state, address: payload.address, loadingAddress: false };
    case ACCEPT_COOKIES:
      return { ...state, acceptedCookies: true };
    case CLEAR:
      const { acceptedCookies, validInput } = state;
      return {
        ...initialState,
        acceptedCookies,
        validInput
      };
    default:
      return state;
  }
};
export default uiReducer;
