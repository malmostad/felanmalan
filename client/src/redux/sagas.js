import { select, takeEvery, all, call, fork, put } from "redux-saga/effects";
import {
  CREATE_REPORT,
  CREATE_REPORT_SUCCESS,
  CREATE_REPORT_FAILURE
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

export default function* rootSaga() {
  yield all([fork(watchCreateReport)]);
}
