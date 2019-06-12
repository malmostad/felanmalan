import { REPORT_ADD } from "./action-types";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
