import {
  REPORT_ADD,
  PHOTO_UPLOAD_SUCCESS,
  PHOTO_REMOVED
} from "../action-types";

const initialState = {
  images: []
  // TODO user default location as start long, lat
};
const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTO_REMOVED: {
      const { uuid = -1 } = action;
      const { images = [] } = state;
      return {
        ...state,
        images: images.filter(id => id !== uuid)
      };
    }
    case PHOTO_UPLOAD_SUCCESS: {
      const { uuid = -1 } = action;
      const { images = [] } = state;
      return {
        ...state,
        images: [...images, uuid]
      };
    }
    case REPORT_ADD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reportReducer;
