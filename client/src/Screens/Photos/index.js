import React, { Component } from "react";
import { Upload } from "antd";
import { connect } from "react-redux";
import { photoUploaded, photoRemoved, uiHideTouchCatcher } from "redux/actions";
import ScreenTitle from "Components/ScreenTitle";
import PhotosOverlay from "Components/PhotosOverlay";
import PhotoItem from "Components/PhotoItem";
import { previewImage } from "utils";
import Plus from "./plus.svg";

import styles from "./Photos.module.css";
import "./Uploader.override.css";

const MAX_AMOUNT_OF_IMAGES = 3;

class Photos extends Component {
  constructor() {
    super();
    this.state = {
      startWithOverlay: true,
      fileList: []
    };
  }
  componentDidMount() {
    const { aPhotoUploaded, previews } = this.props;
    if (aPhotoUploaded || previews.length > 0) {
      this.setState({ startWithOverlay: false });
    }
  }
  onPhotoChange = async ({ file, fileList, event }) => {
    const status = file.status;
    if (status === "uploading") {
      this.setState({
        fileList: [
          ...this.state.fileList.filter(uid => uid !== file.uid),
          file.uid
        ]
      });
    }
    if (status === "done") {
      try {
        const dataURL = await previewImage(file.originFileObj);
        this.props.photoUploaded(file.response.id, dataURL);
      } catch (error) {
        this.props.photoUploaded(file.response.id, -1);
      }
      this.setState({
        fileList: this.state.fileList.filter(uid => uid !== file.uid)
      });
    }
  };
  onPreviewFile = file => {
    return previewImage(file);
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
      accept: 'accept="image/*"',
      name: "file",
      action: "photos",
      multiple: true,
      onChange: this.onPhotoChange,
      showUploadList: false
    };
    const {
      touchCatcher = false,
      images = [],
      aPhotoUploaded = false,
      previews = []
    } = this.props;

    const { fileList = [], startWithOverlay } = this.state;
    const imageItems = previews.concat(
      fileList.map(item => {
        return { uuid: item, isUploading: true };
      })
    );
    const showOverlay =
      !(images.length !== 0 || fileList.length !== 0) && !aPhotoUploaded;
    return (
      <div>
        {touchCatcher && (
          <div
            onTouchStart={this.onTouchStart}
            className={styles.touchCatcher}
          />
        )}
        {startWithOverlay && (
          <PhotosOverlay config={config} show={showOverlay} />
        )}
        <div>
          <ScreenTitle
            titleStrong="Lägg till foton "
            title="på felet och platsen"
          />
          <div className={styles.photosContentHolder}>
            <div className={styles.photosContent}>
              {imageItems.map(preview => (
                <PhotoItem
                  onRemoveImage={this.onRemoveImage}
                  key={preview.uuid}
                  {...preview}
                />
              ))}
              <PhotoItem hide={imageItems.length >= MAX_AMOUNT_OF_IMAGES}>
                <Upload {...config} listType="none">
                  <button className={styles.photoUploadButton}>
                    <img src={Plus} alt="Lägg till bild" />
                  </button>
                </Upload>
              </PhotoItem>
            </div>
          </div>
          <div className="content">
            <p className={styles.infoText}>
              Fotot ska göra det lättare för våra förvaltare<br />
              att hitta där problemet uppstått.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {}, ui = {} } = state;
  const { images = [], previews = [] } = report;
  const { aPhotoUploaded = false, touchCatcher = false } = ui;
  return { images, aPhotoUploaded, previews, touchCatcher };
}

export default connect(
  mapStateToProps,
  { photoUploaded, photoRemoved, uiHideTouchCatcher }
)(Photos);
