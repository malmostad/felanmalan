import React, { Component } from "react";
import styles from "./BottomBar.module.css";
import * as GlobalStyles from "GlobalStyles";
import { withRouter } from "react-router-dom";

class BottomBar extends Component {
  render() {
    const { children = null, location = {} } = this.props;
    const { pathname = "" } = location;
    if (pathname === "/done") {
      return null;
    }
    return (
      <div
        className={styles.bottomBarOuter}
        style={{ backgroundColor: GlobalStyles.mainColor }}
      >
        <div className={styles.bottomBarInner}>{children}</div>
      </div>
    );
  }
}
export default withRouter(BottomBar);
