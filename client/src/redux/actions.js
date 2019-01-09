import { CREATE_SURVEY, CHARTS_GET } from "./action-types";

export const createSurvey = survey => ({
  type: CREATE_SURVEY,
  payload: survey
});

export const getChart = (formId, reportId) => {
  return {
    type: CHARTS_GET,
    payload: { formId, reportId }
  };
};
