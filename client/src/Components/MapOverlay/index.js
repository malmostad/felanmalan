import React, { Component } from "react";
import styles from "./MapOverlay.module.css";
import Logo from "Images/logo.svg";

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
        <div className="screenTitleHolder">
          <img src={Logo} alt="Malmö stad" />
          <h1 className="screenTitle">
            <strong className="boldText">Markera ut platsen </strong>
            där du vill rapportera ett fel
          </h1>
        </div>
      </div>
    );
  }
}
export default MapOverlay;
