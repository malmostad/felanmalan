import React, { Component } from "react";
import { ReactComponent as Logo } from "Images/logo.svg";
import styles from "./FullScreenTitle.module.css";

class FullScreenTitle extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    onClick && onClick();
  };

  render() {
    const {
      titleStrong = "",
      title = "",
      children = null,
      style = {},
      strongTextLast = false,
      screenTitleHolderStyle = false,
      screenTitleStyle = false,
      showLogo = false
    } = this.props;
    const StyleScreenTitle = screenTitleStyle || styles.screenTitle;
    const StyleScreenTitleHolder =
      screenTitleHolderStyle || styles.screenTitleHolder;
    return (
      <div style={style} className={StyleScreenTitleHolder}>
        { showLogo && <Logo /> }
        <h1 className={StyleScreenTitle}>
          {!strongTextLast && (
            <strong className="boldText">{titleStrong}</strong>
          )}
          {title}
          {strongTextLast && (
            <strong className="boldText">{titleStrong}</strong>
          )}
        </h1>
        {children}
      </div>
    );
  }
}
export default FullScreenTitle;
