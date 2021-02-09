import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore(() => {});
jest.mock("@mapbox/mapbox-gl-geocoder", () => {
  class MapboxGeocoder {
    on() {}
    onAdd() {
      return "<div/>";
    }
  }
  return MapboxGeocoder;
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});