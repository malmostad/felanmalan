import React, { Component } from "react";
import styles from "./LargeHeader.module.css";
import TitleHolder from "Components/TitleHolder";

class LargeHeader extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    onClick && onClick();
  };

  render() {
    const { children = null, focus = false } = this.props;
    return (
      <div style={
        {
          height: `${focus ? 10 : 280}px`,
        }
      }
      className={styles.outer}
    >
        <TitleHolder>{children}</TitleHolder>
      </div>
    );
  }
}
export default LargeHeader;
