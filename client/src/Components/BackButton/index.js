import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./BackButton.module.css";
import Arrow from "./arrow.svg";

class BackButton extends Component {
  render() {
    const { history = {}, location = {}, inputFocus } = this.props;
    const { pathname = "" } = location;
    if (pathname === "/" || pathname === "/done") {
      return false;
    }
    const style = {
      transform: `translateY(${inputFocus ? 230 : 0}px)`
    };
    return (
      <button
        className={styles.backButton}
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

function mapStateToProps(state = {}) {
  const { ui = {} } = state;
  const { inputFocus } = ui;
  return { inputFocus };
}
export default connect(mapStateToProps)(withRouter(BackButton));
