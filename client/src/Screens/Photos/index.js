import React, { Component } from "react";
import { Upload } from "antd";
import { connect } from "react-redux";
import { photoUploaded, photoRemoved } from "redux/actions";
import styles from "./Photos.module.css";
import FullScreenTitle from "Components/FullScreenTitle";
import ScreenTitle from "Components/ScreenTitle";
import PhotosOverlay from "Components/PhotosOverlay";
import UploadButton from "./upload-button.svg";
import "./Uploader.override.css";

const Dragger = Upload.Dragger;

class Photos extends Component {
  constructor() {
    super();
    this.state = {
      fileList: []
    };
  }
  onPhotoChange = ({ file, fileList }) => {
    const status = file.status;
    if (status === "done") {
      this.props.photoUploaded(file.response.id);
    }
    this.setState({ fileList });
  };
  onRemoveImage = file => {
    const { response } = file;
    const { id = "" } = response;
    this.props.photoRemoved(id);
  };
  render() {
    const config = {
      name: "file",
      action: "photos",
      multiple: true,
      onChange: this.onPhotoChange
    };
    const { images = [], aPhotoUploaded = false } = this.props;
    const { fileList = [] } = this.state;
    const uploadButton = <div />;
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
              <Upload
                {...config}
                listType="picture-card"
                fileList={fileList}
                onRemove={this.onRemoveImage}
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
              <p>
                Fotot ska göra det lättare för våra förvaltare att hitta där problemet uppstått.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {}, ui = {} } = state;
  const { images = [] } = report;
  const { aPhotoUploaded = false } = ui;
  return { images, aPhotoUploaded };
}

export default connect(
  mapStateToProps,
  { photoUploaded, photoRemoved }
)(Photos);
