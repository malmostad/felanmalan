import {
  ACCEPT_COOKIES,
  CLEAR,
  CREATE_REPORT,
  REPORT_ADD,
  PHOTO_UPLOAD_SUCCESS,
  PHOTO_REMOVED,
  GET_ADDRESS,
  UI_MAP_SCREEN_CLICKED,
  UI_LOADING_STOP,
  UI_LOADING_START,
  UI_TOUCH_CATCHER_HIDE,
  UI_TOUCH_CATCHER_SHOW,
  FETCH_ISSUE_STATUS
} from "./action-types";

export const reportAdd = step => ({
  type: REPORT_ADD,
  payload: step,
  timestamp: Date.now()
});

export const photoUploaded = (uuid, previewDataURL) => ({
  type: PHOTO_UPLOAD_SUCCESS,
  uuid,
  previewDataURL,
  timestamp: Date.now()
});

export const photoRemoved = uuid => ({
  type: PHOTO_REMOVED,
  uuid
});

export const createReport = payload => ({
  type: CREATE_REPORT,
  payload
});

export function getAddress(coordinates) {
  return { type: GET_ADDRESS, payload: coordinates };
}
export const onMapScreenClicked = () => {
  return { type: UI_MAP_SCREEN_CLICKED };
};
export const uiLoadingStart = message => {
  return { type: UI_LOADING_START, message };
};
export const uiLoadingStop = message => {
  return { type: UI_LOADING_STOP };
};
export const uiShowTouchCatcher = () => {
  return { type: UI_TOUCH_CATCHER_SHOW };
};
export const uiHideTouchCatcher = () => {
  return { type: UI_TOUCH_CATCHER_HIDE };
};
export const clear = () => {
  return { type: CLEAR };
};
export const fetchIssueStatus = id => ({
  type: FETCH_ISSUE_STATUS,
  id
});
export const acceptCookies = () => {
  return { type: ACCEPT_COOKIES };
};
