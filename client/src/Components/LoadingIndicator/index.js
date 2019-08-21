import React, { Component } from "react";
import styles from "./LoadingIndicator.module.css";
import { ReactComponent as Spinner } from "./spinner.svg";

class LoadingIndicator extends Component {
  render() {
    const { message = null, size = 20, style = {} } = this.props;
    const circleStyle = {
      width: `${size}px`,
      height: `${size}px`
    };
    return (
      <div className={styles.loadingHolder} style={style}>
        <Spinner style={circleStyle} className={styles.loadingRing} />
        {message && <p className={styles.loadingMessage}>{message}</p>}
      </div>
    );
  }
}
export default LoadingIndicator;
