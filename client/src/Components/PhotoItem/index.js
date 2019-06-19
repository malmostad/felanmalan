import React, { Component } from "react";
import { connect } from "react-redux";

import { uiShowTouchCatcher } from "redux/actions";
import LoadingIndicator from "Components/LoadingIndicator";

import moduleStyles from "./PhotoItem.module.css";
import Can from "./can.svg";

class PhotoItem extends Component {
  state = {
    showRemove: false
  };
  componentWillReceiveProps(nextProps) {
    const { touchCatcher } = this.props;
    if (nextProps.touchCatcher === false && touchCatcher) {
      // hiding touch catcher. probabley clicked
      if (this.state.showRemove) {
        this.setState({
          showRemove: false
        });
      }
    }
  }
  onRemoveImage = uuid => {
    const { onRemoveImage = false } = this.props;
    onRemoveImage && onRemoveImage(uuid);
  };
  renderUploading = () => {
    return (
      <div className={moduleStyles.uploading}>
        <LoadingIndicator />
        Uploading...
      </div>
    );
  };
  onTouchStart = event => {
    const { uiShowTouchCatcher = false } = this.props;
    uiShowTouchCatcher && uiShowTouchCatcher();
    event.stopPropagation();
    event.preventDefault();
    // ugly solution, but its this or adding
    // none passive eventlistner that can cause scroll lag.
    setTimeout(() => {
      this.setState({ showRemove: true });
    }, 40);
  };
  renderImage = () => {
    const { uuid = false, previewDataURL = false } = this.props;
    const { showRemove } = this.state;
    return (
      <div>
        <div onTouchStart={this.onTouchStart}>
          {previewDataURL ? (
            <img key={uuid} src={previewDataURL} alt={uuid} />
          ) : null}
        </div>
        <button
          className={`${moduleStyles.remove} ${
            showRemove ? moduleStyles.showRemove : ""
          }`}
          onClick={() => {
            this.onRemoveImage(uuid);
          }}
        >
          <img src={Can} alt="Ta bort bild" />
        </button>
      </div>
    );
  };

  render() {
    const {
      isUploading = false,
      uuid = false,
      children = null,
      style = {}
    } = this.props;

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

function mapStateToProps(state = {}) {
  const { ui = {} } = state;
  const { touchCatcher = false } = ui;
  return { touchCatcher };
}
export default connect(
  mapStateToProps,
  { uiShowTouchCatcher }
)(PhotoItem);
