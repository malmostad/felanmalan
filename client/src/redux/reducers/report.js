import {
  REPORT_ADD,
  PHOTO_UPLOAD_SUCCESS,
  GET_ADDRESS_SUCCESS,
  PHOTO_REMOVED
} from "../action-types";

// TODO: make this configurable
const {
  REACT_APP_DEFAULT_LONGITUDE = 13.003365,
  REACT_APP_DEFAULT_LATITUDE = 55.6051458
} = process.env;
const defaultCoordinates = {
  longitude: REACT_APP_DEFAULT_LONGITUDE,
  latitude: REACT_APP_DEFAULT_LATITUDE
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
