import { takeEvery, all, call, fork, put } from "redux-saga/effects";
// import {
//   CREATE_SURVEY,
//   CREATE_SURVEY_SUCCESS,
//   CHARTS_GET,
//   CHARTS_GET_SUCCESS
// } from "./action-types";
// import * as Api from "./api";

// export function* getChart(action) {
//   const chart = yield call(Api.getChart, action.payload);
//   yield put({ type: CHARTS_GET_SUCCESS, payload: chart });
// }

// export function* createSurvey(action) {
//   const survey = yield call(Api.createSurvey, action.payload);
//   yield put({ type: CREATE_SURVEY_SUCCESS, payload: survey });
// }

// function* watchGetChart() {
//   yield takeEvery(CHARTS_GET, getChart);
// }

// function* watchCreateSurvey() {
//   yield takeEvery(CREATE_SURVEY, createSurvey);
// }

export default function* rootSaga() {
  // yield all([fork(watchCreateSurvey), fork(watchGetChart)]);
}
