import React, { Component } from "react";
import styles from "./MapOverlay.module.css";
import FullScreenTitle from "Components/FullScreenTitle";

class MapOverlay extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    if (onClick) {
      onClick();
    }
  };

  render() {
    return (
      <div
        className={styles.mapOverlay}
        onClick={this.onClick}
        onTouchStart={this.onClick}
      >
        <FullScreenTitle
          titleStrong="Markera ut platsen "
          title="där du vill rapportera ett fel"
        />
      </div>
    );
  }
}
export default MapOverlay;
