import React, { Component } from "react";
import styles from "./PhotosOverlay.module.css";
import { CSSTransition } from "react-transition-group";

class PhotosOverlay extends Component {
  render() {
    const { children, show } = this.props;
    return (
      <CSSTransition
        unmountOnExit={false}
        className="overlay"
        classNames="overlay"
        timeout={500}
        in={show}
      >
        <div>
          <div className={styles.photosOverlay}>{children}</div>
        </div>
      </CSSTransition>
    );
  }
}
export default PhotosOverlay;
