import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./BottomBar.module.css";
import { withRouter } from "react-router-dom";

class BottomBar extends Component {
  componentWillReceiveProps(nextProps) {
    const { sendingState: currentSendingState } = this.props;
    if (currentSendingState === "pending") {
      if (nextProps.sendingState === "failure") {
        console.log("Failed creating your report");
      }
    }
  }
  showBar = () => {
    const {
      location = {},
      description = "",
      phone = "",
      email = "",
      inputFocus = false
    } = this.props;
    const { pathname = "" } = location;
    if (pathname === "/") {
      return true;
    } else if (pathname === "/info" && description.length === 0) {
      if (inputFocus) {
        return true;
      }
      return false;
    } else if (pathname === "/info" && description.length > 0) {
      return true;
    } else if (
      pathname === "/contact-info" &&
      email.length === 0 &&
      phone.length === 0
    ) {
      if (inputFocus) {
        return true;
      }
      return false;
    } else if (
      pathname === "/contact-info" &&
      (email.length > 0 || phone.length > 0)
    ) {
      return true;
    } else if (pathname === "/done") {
      return false;
    }
    return true;
  };
  isError = () => {
    const {
      location = {},
      onRetry = () => {},
      sendingState = "none",
      validPosition = true
    } = this.props;
    const { pathname = "" } = location;

    if (!validPosition && pathname === "/map") {
      return {
        show: true,
        message: "Inte Malmö stads mark, flytta markören igen"
      };
    }
    if (sendingState === "failure") {
      return {
        show: true,
        message: "Ett fel upptod, klicka här för att försöka igen",
        onClick: onRetry
      };
    }
    return {
      show: false,
      message: ""
    };
  };
  render() {
    const { children = null } = this.props;
    const show = this.showBar();
    const { location = {} } = this.props;
    const { pathname = "" } = location;

    const style = {
      transform: show ? `translateY(0px)` : "translateY(100px)",
      boxShadow:
        pathname === "/map" ? "0px 2px 10px rgba(96, 96, 96, 0.18)" : "none"
    };
    const error = this.isError();
    const styleError = {
      transform: error.show ? `translateY(-70px)` : "translateY(0px)"
    };
    return (
      <div style={style} className={styles.bottomBarOuter}>
        <div className={styles.bottomBarInner}>{children}</div>
        <div
          onClick={error.onClick}
          style={styleError}
          className={styles.error}
        >
          {error.message}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state = {}) {
  const { ui = {}, report = {} } = state;
  const { sendingState = "none", inputFocus } = ui;
  const { description = "", email = "", phone = "", validPosition } = report;

  return {
    inputFocus,
    sendingState,
    validPosition,
    description,
    email,
    phone
  };
}

export default connect(mapStateToProps)(withRouter(BottomBar));
