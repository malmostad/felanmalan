import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import styles from "./NextButton.module.css";

class NextButton extends Component {
  onClick = event => {
    const {
      allowSubmit = false,
      active = true,
      onSubmit = false,
      onClick = false
    } = this.props;
    if (allowSubmit && onSubmit) {
      event.preventDefault();
      onSubmit();
      return;
    }
    if (!active) {
      event.preventDefault();
    }
    if (onSubmit) {
      event.preventDefault();
      onSubmit();
      return;
    }

    if (onClick) {
      event.preventDefault();
      onClick();
      return;
    }
  };
  renderLink = () => {
    const {
      to = "/",
      text = null,
      backButton = false,
      className = false,
      active = true,
      inverted = false,
      children = false
    } = this.props;
    return (
      <Link
        onClick={this.onClick}
        className={`${styles.nextButton} ${!active ? styles.disabled : ""} ${
          inverted ? styles.inverted : ""
        } ${backButton ? styles.backButton : ""} ${className ? className : ""}`}
        to={to}
      >
        {children} {text}
      </Link>
    );
  };
  render() {
    const { path = "/", exact } = this.props;
    return <Route exact={exact} path={path} render={this.renderLink} />;
  }
}
// add loading of state here
export default withRouter(NextButton);
