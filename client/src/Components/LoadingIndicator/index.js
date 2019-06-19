import React, { Component } from "react";
import styles from "./LoadingIndicator.module.css";

class LoadingIndicator extends Component {
  render() {
    const { message = null } = this.props;
    return (
      <div className={styles.loadingHolder}>
        <div className={styles.loadingRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {message && <p className={styles.loadingMessage}>{message}</p>}
      </div>
    );
  }
}
export default LoadingIndicator;
