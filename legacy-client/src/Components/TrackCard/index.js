import React, { Component } from "react";
import styles from "./TrackCard.module.css";
import { withRouter } from "react-router-dom";

class Steps extends Component {
  render() {
    const {
      issueNumber = "",
      address = "",
      images = []
    } = this.props;
    const image = images[0];

    return (
      <div className={styles.background}>
        <div className={styles.imageHolder}>
          {image && (
            <img
              className={styles.image}
              src={`/photos/${image}`}
              alt="Bild av felet"
            />
          )}
        </div>
        <div className={styles.contentHolder}>
          {issueNumber && (
            <strong className={styles.issue}>Ärende {address}</strong>
          )}
          {address && <p className={styles.address}>{address}</p>}
        </div>
      </div>
    );
  }
}

export default withRouter(Steps);
