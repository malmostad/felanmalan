import React, { Component } from "react";
import styles from "./InputContent.module.css";

class InputContent extends Component {
  render() {
    const { children = null } = this.props;
    return <div className={styles.inputContent}>{children}</div>;
  }
}
export default InputContent;
