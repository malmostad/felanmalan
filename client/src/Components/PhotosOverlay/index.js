import React, { Component } from "react";
import { Upload } from "antd";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import FullScreenTitle from "Components/FullScreenTitle";

import styles from "./PhotosOverlay.module.css";
import UploadButton from "./upload-button.svg";
const Dragger = Upload.Dragger;

class PhotosOverlay extends Component {
  render() {
    const { config, show } = this.props;
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
              titleStrong="Lägg till foton "
              title="på problemet & platsen"
              style={{margin: "0 10px"}}
            />
            <div className={styles.actionWrapper}>
              <Link className={styles.skipLink} to="/map">Hoppa över</Link>
              <Dragger {...config} className={styles.dragger}>
                <button className={styles.uploadArea}>
                  <img
                    className={styles.uploadButton}
                    src={UploadButton}
                    alt="Upload"
                  />
                  <p className={styles.uploadText}>
                    Klicka eller dra bild hit för att starta uppladdning
                  </p>
                  <p className={styles.uploadTextMobile}>
                    Lägg till foto
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
