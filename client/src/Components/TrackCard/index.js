import React, { Component } from "react";
import styles from "./TrackCard.module.css";
import { withRouter } from "react-router-dom";
import tempImage from "./rectangle.png";

class Steps extends Component {
  render() {
    const {
      description = "",
      issueNumber = "",
      address = "",
      image = tempImage
    } = this.props;
    return (
      <div className={styles.background}>
        <div className={styles.imageHolder}>
          {image && <img src={image} alt="Bild av felet" />}
        </div>
        <div className={styles.contentHolder}>
          {issueNumber && <strong className={styles.issue}>Ärende {address}</strong>}
          {address && <p className={styles.address}>{address}</p>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      </div>
    );
  }
}

export default withRouter(Steps);
