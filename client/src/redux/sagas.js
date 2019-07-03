import { select, takeEvery, all, call, fork, put } from "redux-saga/effects";
import {
  CREATE_REPORT,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE,
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS,
  FETCH_ISSUE_STATUS,
  FETCH_ISSUE_STATUS_FAILURE,
  FETCH_ISSUE_STATUS_SUCCESS,
  PROPERTY_STATUS_CHECKED
} from "./action-types";

import * as Api from "./api";

export function* createReport() {
  const { report } = yield select();
  // TODO: clean up data
  const { timestamp, previews, address, ...props } = report;
  try {
    const createdReport = yield call(Api.createReport, {
      report: { ...props }
    });
    yield put({ type: CREATE_REPORT_SUCCESS, payload: createdReport });
  } catch (error) {
    yield put({ type: CREATE_REPORT_FAILURE, payload: error });
  }
}

function* watchCreateReport() {
  yield takeEvery(CREATE_REPORT, createReport);
}

export function* getAddress(action) {
  const records = yield call(Api.getAddress, action.payload);
  yield put({
    type: GET_ADDRESS_SUCCESS,
    payload: extractClosestAddress(records)
  });
  const property = yield call(Api.fetchTileQuery, action.payload);
  if (property) {
    const { features } = property;
    yield put({
      type: PROPERTY_STATUS_CHECKED,
      valid: features.length > 0,
      coordinates: action.payload
    });
  }
}
function* watchGetAddress() {
  yield takeEvery(GET_ADDRESS, getAddress);
}

function extractClosestAddress(records) {
  // TODO: Cover edge cases
  // use place_name??
  const feature = records.features[0] || {};
  const { text = "", address = "" } = feature;
  return {
    address: `${text} ${address}`
  };
}
export function* fetchIssueStatus(action) {
  try {
    const issueData = yield call(Api.fetchIssueStatus, action.id);
    yield put({ type: FETCH_ISSUE_STATUS_SUCCESS, payload: issueData });
  } catch (error) {
    yield put({ type: FETCH_ISSUE_STATUS_FAILURE, payload: error });
  }
}

function* watchFetchIssueStatus() {
  yield takeEvery(FETCH_ISSUE_STATUS, fetchIssueStatus);
}

export default function* rootSaga() {
  yield all([
    fork(watchCreateReport),
    fork(watchGetAddress),
    fork(watchFetchIssueStatus)
  ]);
}
