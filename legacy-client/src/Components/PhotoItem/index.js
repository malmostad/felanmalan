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
      this.setState({
        showRemove: false
      });
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
        Laddar upp
      </div>
    );
  };
  onTouchStart = event => {
    const { uiShowTouchCatcher = false, preventRemove = false } = this.props;
    if (preventRemove) {
      return;
    }
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
    const {
      uuid = false,
      dataURL = false,
    } = this.props;
    const { showRemove } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <div style={{ height: "100%" }} onTouchStart={this.onTouchStart}>
          {dataURL ? (
            <img key={uuid} src={dataURL} alt={uuid} />
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
      hide = false,
      children = null,
      style = {},
      preventRemove = false
    } = this.props;

    return (
      <div
        className={`
          ${moduleStyles.photoItem}
          ${hide ? moduleStyles.hideItem : ""}
          ${preventRemove ? moduleStyles.noneRemoveable : ""}
          `}
        key={uuid}
        style={style}
      >
        {uuid ? this.renderImage() : null}
        {isUploading && this.renderUploading()}
        {children ? children : null}
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
