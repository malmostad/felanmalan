import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Arrow from "./arrow.svg";

class BackButton extends Component {
  render() {
    const { history = {}, location = {} } = this.props;
    const { pathname = "" } = location;
    if (pathname === "/" || pathname === "/done") {
      return false;
    }
    const style = {
      outline: "none",
      border: "none",
      backgroundColor: "transparent",
      position: "absolute",
      top: "30px",
      left: "0px",
      padding: "10px",
      zIndex: 1003
    };
    return (
      <button
        style={style}
        onClick={() => {
          history.goBack();
        }}
      >
        <img src={Arrow} alt="back" />
      </button>
    );
  }
}

export default withRouter(BackButton);
