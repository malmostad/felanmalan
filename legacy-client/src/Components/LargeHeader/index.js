// TODO: rename to just Heade
import React, { Component } from "react";
import styles from "./LargeHeader.module.css";
import TitleHolder from "Components/TitleHolder";

class LargeHeader extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    onClick && onClick();
  };

  render() {
    const { children = null } = this.props;
    return (
      <div className={styles.outer}>
        <TitleHolder>{children}</TitleHolder>
      </div>
    );
  }
}
export default LargeHeader;
