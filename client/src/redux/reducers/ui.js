import {
  CLEAR,
  CREATE_REPORT_FAILURE,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT,
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS,
  UI_MAP_SCREEN_CLICKED,
  UI_LOADING_STOP,
  UI_LOADING_START,
  UI_TOUCH_CATCHER_HIDE,
  UI_TOUCH_CATCHER_SHOW,
  PHOTO_UPLOAD_SUCCESS
} from "../action-types";

const initialState = {
  loadingAddress: false,
  aPhotoUploaded: false,
  mapScreenClicked: false,
  touchCatcher: false,
  sendingState: "none",
  address: false,
  loading: false
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_TOUCH_CATCHER_SHOW:
      return { ...state, touchCatcher: true };
    case UI_TOUCH_CATCHER_HIDE:
      return { ...state, touchCatcher: false };
    case PHOTO_UPLOAD_SUCCESS:
      return { ...state, aPhotoUploaded: true };
    case UI_MAP_SCREEN_CLICKED:
      return { ...state, mapScreenClicked: true };
    case CREATE_REPORT:
      return { ...state, sendingState: "pending" };
    case CREATE_REPORT_FAILURE:
      return { ...state, sendingState: "failure" };
    case CREATE_REPORT_SUCCESS:
      return { ...state, sendingState: "none" };
    case UI_LOADING_START:
      const { message = false } = action;
      return { ...state, loading: true, loadingMessage: message };
    case UI_LOADING_STOP:
      return { ...state, loading: false, loadingMessage: false };
    case GET_ADDRESS:
      return { ...state, loadingAddress: true };
    case GET_ADDRESS_SUCCESS:
      const { payload = {} } = action;
      return { ...state, address: payload.address, loadingAddress: false };
    case CLEAR:
      const { mapScreenClicked, aPhotoUploaded } = state;
      return { ...initialState, mapScreenClicked, aPhotoUploaded };
    default:
      return state;
  }
};
export default uiReducer;
