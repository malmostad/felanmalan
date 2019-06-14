import React, { Component } from "react";
import "./MapOverlay.css";
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
        style={styles.background}
        onClick={this.onClick}
        onTouchStart={this.onClick}
      >
        <h1 style={styles.title}>
          <strong style={styles.titleStrong}>Markera ut platsen </strong>
          där du vill rapportera ett fel
        </h1>
      </div>
    );
  }
}
const styles = {
  background: {
    position: "fixed",
    display: "flex",
    zIndex: 99,
    top: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(6, 107, 53, 0.85)",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    textAlign: "center",
    padding: "60px 20px 20px"
  },
  title: {
    maxWidth: "20rem",
    fontWeight: "lighter",
    letterSpacing: "0.2px",
    textAlign: "center",
    color: "#FFE5E6",
    fontSize: "47px",
    lineHeight: "50px"
  },
  titleStrong: {
    fontWeight: "bold"
  }
};
// add loading of state here
export default MapOverlay;
