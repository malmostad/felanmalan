import React, { Component } from "react";
import { ReactComponent as Logo } from "Images/logo.svg";
import styles from "./ScreenTitle.module.css";

class ScreenTitle extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    if (onClick) {
      onClick();
    }
  };

  render() {
    const {
      titleStrong = "",
      title = "",
      children = null,
      strongTextLast = false
    } = this.props;
    return (
      <div className={styles.screenTitleBg}>
        <div className={styles.screenTitleHolder}>
          <Logo />
          <h1 className={styles.screenTitle}>
            { !strongTextLast && <strong className="boldText">{titleStrong}</strong> }
            {title}
            { strongTextLast && <strong className="boldText">{titleStrong}</strong> }
          </h1>
          {children}
        </div>
      </div>
    );
  }
}
export default ScreenTitle;
