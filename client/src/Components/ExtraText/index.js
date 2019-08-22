import React, { Component } from "react";
import { Route } from "react-router-dom";
import styles from "./ExtraText.module.css";

class ExtraText extends Component {
  renderText = () => {
    console.log("RENDER");
    const { text, hidden = false } = this.props;
    if (hidden) {
      return null;
    }
    return <p className={styles.extraText}>{text}</p>;
  };
  render() {
    const { path } = "/contact-info";
    return <Route exact path={path} render={this.renderText} />;
  }
}
export default ExtraText;
