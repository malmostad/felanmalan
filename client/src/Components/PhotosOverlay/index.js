import React, { Component } from "react";
import { Upload } from "antd";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import FullScreenTitle from "Components/FullScreenTitle";

import styles from "./PhotosOverlay.module.css";
import buttonStyles from "Components/NextButton/NextButton.module.css";
import UploadButton from "./upload-button.svg";
const Dragger = Upload.Dragger;

class PhotosOverlay extends Component {
  render() {
    const { config, show, texts = {} } = this.props;
    return (
      <CSSTransition
        unmountOnExit={false}
        className="overlay"
        classNames="overlay"
        enter={false}
        timeout={500}
        in={show}
      >
        <div>
          <div className={styles.photosOverlay}>
            <FullScreenTitle
              titleStrong={texts.addPhotoOnProblemAndPlace}
              style={{ maxWidth: "800px", width: "100%" }}
            />
            <div className={styles.actionWrapper}>
              <Link className={styles.skipLink} to="/map">
                {texts.skip}
              </Link>
              <Dragger {...config} className={styles.dragger}>
                <button className={styles.uploadArea}>
                  <img
                    className={styles.uploadButton}
                    src={UploadButton}
                    alt="Upload"
                  />
                  <p className={styles.uploadText}>{texts.clickOrDragImage}</p>
                  <p
                    className={`${styles.uploadMobileButton} ${buttonStyles.nextButton} ${buttonStyles.inverted}`}
                  >
                    {texts.addPhoto}
                  </p>
                </button>
              </Dragger>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}
export default PhotosOverlay;
