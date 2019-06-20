import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { save, load } from "redux-localstorage-simple";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { clear } from "redux/actions";
import reducers from "redux/reducers";
import rootSaga from "redux/sagas";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  load(),
  composeWithDevTools(applyMiddleware(sagaMiddleware, save({ debounce: 500 })))
);

// clear data on startup if old. There is probably a better place for this.
const { timestamp = -1 } = store.getState().report;
const MAX_AGE_OF_STORED_REPORT = 1000 * 60 * 60 * 24 * 3; // 3 days
const age = Date.now() - timestamp;
if (timestamp !== -1 && age > MAX_AGE_OF_STORED_REPORT) {
  store.dispatch(clear());
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
