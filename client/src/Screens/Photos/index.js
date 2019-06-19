import React, { Component } from "react";
import { Upload } from "antd";
import { connect } from "react-redux";
import { photoUploaded, photoRemoved } from "redux/actions";
import FullScreenTitle from "Components/FullScreenTitle";
import ScreenTitle from "Components/ScreenTitle";
import PhotosOverlay from "Components/PhotosOverlay";
import PhotoItem from "Components/PhotoItem";
import UploadButton from "./upload-button.svg";
import { previewImage } from "utils";
import Plus from "./plus.svg";

import styles from "./Photos.module.css";
import "./Uploader.override.css";

const MAX_AMOUNT_OF_IMAGES = 3;
const Dragger = Upload.Dragger;

class Photos extends Component {
  constructor() {
    super();
    this.state = {
      fileList: []
    };
  }
  onPhotoChange = async ({ file, fileList }) => {
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
    console.log(file);
    return previewImage(file);
  };
  onRemoveImage = file => {
    const { response } = file;
    const { id = "" } = response;
    this.props.photoRemoved(id);
  };
  // TODO: add progress on upload
  render() {
    const config = {
      name: "file",
      action: "photos",
      multiple: true,
      onChange: this.onPhotoChange
    };
    const { images = [], aPhotoUploaded = false, previews = [] } = this.props;
    const { fileList = [] } = this.state;
    const imageItems = previews.concat(
      fileList.map(item => {
        return { uuid: item, isUploading: true };
      })
    );
    const showOverlay =
      !(images.length !== 0 || fileList.length !== 0) && !aPhotoUploaded;
    return (
      <div>
        <PhotosOverlay show={showOverlay}>
          <Dragger {...config}>
            <FullScreenTitle
              titleStrong="Lägg till foton "
              title="på problemet och platsen"
            />
            <div className={styles.uploadArea}>
              <img
                className={styles.uploadButton}
                src={UploadButton}
                alt="Upload"
              />
              <p className={styles.uploadText}>
                Klicka eller dra bild hit för att starta uppladdning
              </p>
            </div>
          </Dragger>
        </PhotosOverlay>
        <div>
          <ScreenTitle
            titleStrong="Lägg till foton "
            title="på felet och platsen"
          />
          <div className={styles.photosContentHolder}>
            <div className={styles.photosContent}>
              {imageItems.map(preview => (
                <PhotoItem key={preview.uuid} {...preview} />
              ))}
              {imageItems.length <= MAX_AMOUNT_OF_IMAGES ? (
                <PhotoItem>
                  <Upload {...config} listType="none">
                    <div className={styles.photoUploadButton}>
                      <img src={Plus} alt="Lägg till bild" />
                    </div>
                  </Upload>
                </PhotoItem>
              ) : null}
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
  const { aPhotoUploaded = false } = ui;
  return { images, aPhotoUploaded, previews };
}

export default connect(
  mapStateToProps,
  { photoUploaded, photoRemoved }
)(Photos);
