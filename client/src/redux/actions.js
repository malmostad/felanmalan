import {
  CREATE_REPORT,
  REPORT_ADD,
  PHOTO_UPLOAD_SUCCESS,
  PHOTO_REMOVED,
  GET_ADDRESS,
  UI_MAP_SCREEN_CLICKED
} from "./action-types";

export const reportAdd = step => ({
  type: REPORT_ADD,
  payload: step
});

export const photoUploaded = (uuid, previewDataURL) => ({
  type: PHOTO_UPLOAD_SUCCESS,
  uuid,
  previewDataURL
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
