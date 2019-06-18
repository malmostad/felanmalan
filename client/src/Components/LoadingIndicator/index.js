import React, { Component } from "react";
import styles from "./LoadingIndicator.module.css";

class LoadingIndicator extends Component {
  render() {
    return (
      <div className={styles.loadingRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
export default LoadingIndicator;
