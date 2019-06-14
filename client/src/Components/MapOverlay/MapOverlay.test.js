import React from "react";
import ReactDOM from "react-dom";
import MapOverlay from "./";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MapOverlay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
