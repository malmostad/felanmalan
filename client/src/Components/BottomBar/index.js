import React, { Component } from "react";
import styles from "./BottomBar.module.css";
import * as GlobalStyles from "GlobalStyles";

class BottomBar extends Component {
  render() {
    const { children = null } = this.props;
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
export default BottomBar;
