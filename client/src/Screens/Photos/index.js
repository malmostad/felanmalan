import React, { Component } from "react";
import { Upload } from "antd";
import { connect } from "react-redux";
import { photoUploaded, photoRemoved, uiHideTouchCatcher } from "redux/actions";
import FullScreenTitle from "Components/FullScreenTitle";
import PhotosOverlay from "Components/PhotosOverlay";
import PhotoItem from "Components/PhotoItem";
import { previewImage } from "utils";
import { ReactComponent as Plus } from "./plus.svg";

import styles from "./Photos.module.css";
import "./Uploader.override.css";

const { REACT_APP_API_URL = "/" } = process.env;
const ITEM_SIZE = 350;

class Photos extends Component {
  constructor() {
    super();
    this.state = {
      fileList: []
    };
  }
  onPhotoChange = async ({ file, fileList, event }) => {
    const status = file.status;
    if (status === "uploading") {
      const exits = this.state.fileList.find(({ uuid }) => uuid === file.uid);

      if (!exits) {
        /*
         * TODO: scroll need to animated if used
        setTimeout(() => {
          this.scrollDiv.scrollLeft = this.scrollDiv.scrollWidth - ITEM_SIZE;
        }, 300);
        */
        const dataURL = await previewImage(file.originFileObj);
        this.setState({
          fileList: [
            ...this.state.fileList.filter(({ uuid }) => uuid !== file.uid),
            { uuid: file.uid, dataURL }
          ]
        });
      }
    }
    if (status === "done") {
      const dataURL = await previewImage(file.originFileObj);
      try {
        this.props.photoUploaded(file.response.id, dataURL);
      } catch (error) {
        this.props.photoUploaded(file.response.id, -1);
      }
      // remove from temp state
      this.setState({
        fileList: this.state.fileList.filter(({ uuid }) => uuid !== file.uid)
      });
    }
  };
  onRemoveImage = uuid => {
    this.props.photoRemoved(uuid);
  };
  onTouchStart = () => {
    const { uiHideTouchCatcher } = this.props;
    uiHideTouchCatcher && uiHideTouchCatcher();
  };

  // TODO: add progress on upload
  render() {
    const config = {
      accept: "image/*",
      name: "file",
      action: `${REACT_APP_API_URL}photos`,
      multiple: true,
      onChange: this.onPhotoChange,
      showUploadList: false
    };
    const {
      touchCatcher = false,
      images = [],
      previews = [],
      texts = {}
    } = this.props;

    const { fileList = [] } = this.state;
    const imageItems = previews.concat(
      fileList.map(item => {
        const { uuid, dataURL } = item;
        return { uuid, dataURL, isUploading: true };
      })
    );
    const showOverlay = !(images.length !== 0 || fileList.length !== 0);
    return (
      <div>
        <div className={styles.pageHeader}>
          <FullScreenTitle titleStrong={texts.addPhotoOnProblemAndPlace} />
        </div>
        {touchCatcher && (
          <div
            onTouchStart={this.onTouchStart}
            className={styles.touchCatcher}
          />
        )}
        {images.length === 0 && (
          <PhotosOverlay texts={texts} config={config} show={showOverlay} />
        )}
        <div
          ref={el => (this.scrollDiv = el)}
          className={styles.photosContentHolder}
        >
          <div className={styles.photosContent}>
            {imageItems.map(preview => (
              <PhotoItem
                onRemoveImage={this.onRemoveImage}
                key={preview.uuid}
                {...preview}
              />
            ))}
            <PhotoItem>
              <Upload {...config} listType="none">
                <button className={styles.photoUploadButton}>
                  <Plus />
                </button>
              </Upload>
            </PhotoItem>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {}, ui = {}, texts } = state;
  const { images = [], previews = [] } = report;
  const { touchCatcher = false } = ui;
  return { images, previews, touchCatcher, texts };
}

export default connect(
  mapStateToProps,
  { photoUploaded, photoRemoved, uiHideTouchCatcher }
)(Photos);
