import {
  CLEAR,
  REPORT_ADD,
  PHOTO_UPLOAD_SUCCESS,
  GET_ADDRESS_SUCCESS,
  PHOTO_REMOVED,
  PROPERTY_STATUS_CHECKED
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
  timestamp: -1,
  previews: []
};
const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADDRESS_SUCCESS:
      const { payload = {} } = action;
      return { ...state, address: payload.address };
    case PHOTO_REMOVED: {
      const { uuid = -1 } = action;
      const { images = [], previews = [] } = state;
      return {
        ...state,
        images: images.filter(id => id !== uuid),
        previews: previews.filter(preview => preview.uuid !== uuid)
      };
    }
    case PHOTO_UPLOAD_SUCCESS: {
      const { uuid = -1, previewDataURL = -1, timestamp } = action;
      const { images = [], previews = [] } = state;
      return {
        ...state,
        timestamp,
        images: [...images, uuid],
        previews: [...previews, { uuid, dataURL: previewDataURL }]
      };
    }
    case REPORT_ADD:
      const { timestamp = -1 } = action;
      return { ...state, ...action.payload, timestamp };
    case CLEAR:
      const { email, phone } = state;
      return {
        ...initialState,
        email,
        phone
      };
    case PROPERTY_STATUS_CHECKED:
      const { coordinates = {}, valid = true } = action;
      if (
        coordinates.longitude === state.longitude &&
        coordinates.latitude === state.latitude
      ) {
        return { ...state, validPosition: valid };
      }
      return state;

    default:
      return state;
  }
};

export default reportReducer;
