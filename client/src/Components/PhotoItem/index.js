import React, { Component } from "react";
import styles from "./PhotoItem.module.css";

class PhotoItem extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    if (onClick) {
      onClick();
    }
  };
  renderUploading = () => {
    return <div className={styles.uploading}>Uploading...</div>;
  };
  renderImage = () => {
    const { uuid = false, previewDataURL = false } = this.props;
    return (
      <div>
        <img key={uuid} src={previewDataURL} alt={uuid} />
        <div
          onClick={() => {
            this.onRemoveImage(uuid);
          }}
        >
          Remove
        </div>
      </div>
    );
  };

  render() {
    const { isUploading = false, uuid = false, children = null } = this.props;
    return (
      <div className={styles.photoItem} key={uuid}>
        <div className={styles.photoItemContent}>
          {isUploading ? this.renderUploading() : null}
          {uuid ? this.renderImage() : null}
          {children ? children : null}
        </div>
      </div>
    );
  }
}
export default PhotoItem;
