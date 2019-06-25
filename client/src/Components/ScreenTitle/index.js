import React, { Component } from "react";
import styles from "./ScreenTitle.module.css";
import FullScreenTitle from "Components/FullScreenTitle";

class ScreenTitle extends Component {
  render() {
    return (
      <div className={styles.screenTitleBg}>
        <FullScreenTitle
          screenTitleHolderStyle={styles.screenTitleHolder}
          screenTitleStyle={styles.screenTitle}
          {...this.props}
        />
      </div>
    );
  }
}
export default ScreenTitle;
