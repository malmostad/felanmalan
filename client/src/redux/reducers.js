import {
  REPORT_ADD,
  PHOTO_UPLOAD_SUCCESS,
  CREATE_REPORT_FAILURE,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT
} from "./action-types";
// split up to different reducers?

const initialState = {
  images: [],
  sendingState: "none"
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REPORT:
      return { ...state, sendingState: "pending" };
    case CREATE_REPORT_FAILURE:
      return { ...state, sendingState: "failure" };
    case CREATE_REPORT_SUCCESS:
      return { ...state, sendingState: "none" };
    case PHOTO_UPLOAD_SUCCESS: {
      const { uuid = -1 } = action;
      const { images = [] } = state;
      images.push(uuid);
      return {
        ...state,
        images
      };
    }
    case REPORT_ADD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default rootReducer;
