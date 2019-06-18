import {
  REPORT_ADD,
  PHOTO_UPLOAD_SUCCESS,
  GET_ADDRESS_SUCCESS,
  PHOTO_REMOVED
} from "../action-types";

// TODO: make this configurable
const defaultCoordinates = {
  longitude: 13.003365,
  latitude: 55.6051458
};
const initialState = {
  ...defaultCoordinates,
  images: [],
  previews: []
};
const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS_SUCCESS:
      const { payload = {} } = action;
      return { ...state, address: payload.address };
    case PHOTO_REMOVED: {
      const { uuid = -1 } = action;
      const { images = [] } = state;
      return {
        ...state,
        images: images.filter(id => id !== uuid)
      };
    }
    case PHOTO_UPLOAD_SUCCESS: {
      const { uuid = -1, previewDataURL = -1 } = action;
      const { images = [], previews = [] } = state;
      return {
        ...state,
        images: [...images, uuid],
        previews: [...previews, { uuid, previewDataURL }]
      };
    }
    case REPORT_ADD:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reportReducer;
