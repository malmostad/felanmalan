import { select, takeEvery, all, call, fork, put } from "redux-saga/effects";
import {
  CREATE_REPORT,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE,
  GET_ADDRESS,
  GET_ADDRESS_SUCCESS
} from "./action-types";

import * as Api from "./api";

export function* createReport() {
  const { report } = yield select();
  try {
    const createdReport = yield call(Api.createReport, { report });
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
}
function* watchGetAddress() {
  yield takeEvery(GET_ADDRESS, getAddress);
}

function extractClosestAddress(records) {
  // TODO: Cover edge cases
  return {
    address: `${records.features[0].text} ${records.features[0].address}`
  };
}

export default function* rootSaga() {
  yield all([fork(watchCreateReport), fork(watchGetAddress)]);
}
