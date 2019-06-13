import {
  CREATE_REPORT,
  REPORT_ADD,
  PHOTO_UPLOAD_SUCCESS
} from "./action-types";

export const reportAdd = step => ({
  type: REPORT_ADD,
  payload: step
});

export const photoUploaded = uuid => ({
  type: PHOTO_UPLOAD_SUCCESS,
  uuid
});

export const createReport = payload => ({
  type: CREATE_REPORT,
  payload
});
