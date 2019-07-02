import React, { Component } from "react";
import styles from "./LargeHeader.module.css";

class LargeHeader extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    onClick && onClick();
  };

  render() {
    const {
      children = null,
      size = 450
    } = this.props;
    return (
      <div style={{ height: `${size}px` }} className={styles.outer}>
        {children}
      </div>
    );
  }
}
export default LargeHeader;
