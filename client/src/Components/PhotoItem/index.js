import React, { Component } from "react";
import moduleStyles from "./PhotoItem.module.css";

class PhotoItem extends Component {
  onClick = () => {
    const { onClick = false } = this.props;
    if (onClick) {
      onClick();
    }
  };
  renderUploading = () => {
    return <div className={moduleStyles.uploading}>Uploading...</div>;
  };
  renderImage = () => {
    const { uuid = false, previewDataURL = false } = this.props;
    return (
      <div>
        {previewDataURL ? (
          <img key={uuid} src={previewDataURL} alt={uuid} />
        ) : null}
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
    const { isUploading = false, uuid = false, children = null, style = {} } = this.props;
    return (
      <div className={moduleStyles.photoItem} key={uuid} style={style}>
        <div className={moduleStyles.photoItemContent}>
          {isUploading ? this.renderUploading() : null}
          {uuid ? this.renderImage() : null}
          {children ? children : null}
        </div>
      </div>
    );
  }
}
export default PhotoItem;
