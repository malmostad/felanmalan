import React, { Component } from "react";
import styles from "./BottomBar.module.css";
import { withRouter } from "react-router-dom";

class BottomBar extends Component {
  render() {
    const { children = null, location = {}, disabled = false } = this.props;
    const { pathname = "" } = location;
    const style = {};
    if (disabled) {
      style.pointerEvents = "none";
    }
    if (pathname === "/done") {
      return null;
    }
    return (
      <div style={style} className={styles.bottomBarOuter}>
        <div className={styles.bottomBarInner}>{children}</div>
      </div>
    );
  }
}
export default withRouter(BottomBar);
