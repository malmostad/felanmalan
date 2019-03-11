import { takeEvery, all, call, fork, put } from "redux-saga/effects";
import { CREATE_REPORT, CREATE_REPORT_SUCCESS } from "./action-types";
import * as Api from "./api";

export function* createReport(action) {
  const report = yield call(Api.createReport, action.payload);
  yield put({ type: CREATE_REPORT_SUCCESS, payload: report });
}

function* watchCreateReport() {
  yield takeEvery(CREATE_REPORT, createReport);
}

export default function* rootSaga() {
  yield all([fork(watchCreateReport)]);
}
