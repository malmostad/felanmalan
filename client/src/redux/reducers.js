import {
  CREATE_SURVEY_SUCCESS,
  CREATE_SURVEY,
  CHARTS_GET_SUCCESS,
  CHARTS_GET
} from "./action-types";

const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARTS_GET_SUCCESS:
      return { ...state, chart: action.payload, isLoading: false };
    case CHARTS_GET:
      return { ...state, isLoading: true };
    case CREATE_SURVEY:
      return { ...state, isLoading: true };
    case CREATE_SURVEY_SUCCESS:
      return {
        ...state,
        survey: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
export default rootReducer;
