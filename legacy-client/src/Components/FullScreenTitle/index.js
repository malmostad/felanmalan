// TODO: Rename to just Title
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
      title = "",
      children = null,
      style = {},
      screenTitleHolderStyle = false,
      screenTitleStyle = false,
      showLogo = false
    } = this.props;
    const StyleScreenTitle = screenTitleStyle || styles.screenTitle;
    const StyleScreenTitleHolder =
      screenTitleHolderStyle || styles.screenTitleHolder;
    return (
      <div style={style} className={StyleScreenTitleHolder}>
        {showLogo && <Logo />}
        <h1 className={StyleScreenTitle}>{title}</h1>
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}
export default FullScreenTitle;
