import React, { Component } from "react";
import styles from "./LoadingIndicator.module.css";

class LoadingIndicator extends Component {
  render() {
    const { message = null, size = false, style = {} } = this.props;
    let innerStyle = {};
    let outerStyle = {};
    if (size) {
      innerStyle = {
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${size / 3}px`
      };
      outerStyle = {
        width: `${size + 12}px`,
        height: `${size + 12}px`
      };
    }
    return (
      <div className={styles.loadingHolder} style={style}>
        <div className={styles.loadingRing} style={outerStyle}>
          {Array(4)
            .fill("div")
            .map((a, i) => {
              return <div style={innerStyle} key={`div-${i}`} />;
            })}
        </div>
        {message && <p className={styles.loadingMessage}>{message}</p>}
      </div>
    );
  }
}
export default LoadingIndicator;
