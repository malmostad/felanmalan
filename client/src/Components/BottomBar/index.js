import React, { Component } from "react";
import styles from "./BottomBar.module.css";
import { Colors } from 'GlobalStyles';

class BottomBar extends Component {
  render() {
    const { children = null } = this.props;
    return (
      <div
        className={styles.bottomBarOuter}
        style={{ backgroundColor: Colors.mainColor }}
      >
        <div className={styles.bottomBarInner}>{children}</div>
      </div>
    );
  }
}
export default BottomBar;
