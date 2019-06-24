import React, { Component } from "react";
import { ReactComponent as Logo } from "Images/logo.svg";
import styles from "./ScreenTitle.module.css";
import FullScreenTitle from "Components/FullScreenTitle";

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
        <FullScreenTitle
          screenTitleHolderStyle={styles.screenTitleHolder}
          screenTitleStyle={styles.screenTitle}
          title={title}
          titleStrong={titleStrong}
          strongTextLast={strongTextLast}
        >
          {children}
        </FullScreenTitle>
      </div>
    );
  }
}
export default ScreenTitle;
