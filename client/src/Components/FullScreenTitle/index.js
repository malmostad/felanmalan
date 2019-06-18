import React, { Component } from "react";
import Logo from "Images/logo.svg";
import styles from "./FullScreenTitle.module.css";

class FullScreenTitle extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    if (onClick) {
      onClick();
    }
  };

  render() {
    const { titleStrong = "", title = "", children = null } = this.props;
    return (
      <div className={styles.screenTitleHolder}>
        <img src={Logo} alt="Malmö stad" />
        <h1 className={styles.screenTitle}>
          <strong className="boldText">{titleStrong}</strong>
          {title}
        </h1>
        {children}
      </div>
    );
  }
}
export default FullScreenTitle;
