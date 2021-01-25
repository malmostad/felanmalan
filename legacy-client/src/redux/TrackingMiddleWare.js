import {
  GET_ADDRESS_SUCCESS,
  PHOTO_UPLOAD_SUCCESS,
  PHOTO_REMOVED,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE
} from "./action-types";
import { track } from "TrackingService";

const TrackingMiddleWare = store => next => action => {
  switch (action.type) {
    case PHOTO_UPLOAD_SUCCESS:
    case PHOTO_REMOVED:
    case CREATE_REPORT_SUCCESS:
    case CREATE_REPORT_FAILURE:
    case GET_ADDRESS_SUCCESS:
      track(action.type);
      break;
    default:
      break;
  }

  return next(action);
};
export default TrackingMiddleWare;
