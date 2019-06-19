import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import styles from "./NextButton.module.css";
import { ReactComponent as NextArrow } from "./next.svg";

class NextButton extends Component {
  onClick = event => {
    const { active = true, onSubmit = false } = this.props;
    if (!active) {
      event.preventDefault();
    }
    if (onSubmit) {
      event.preventDefault();
      onSubmit();
    }
  };
  renderLink = () => {
    const { to = "/", text = null, active = true } = this.props;
    return (
      <Link
        onClick={this.onClick}
        className={`${styles.nextButton} ${!active ? styles.disabled : ""}`}
        to={to}
      >
        {text}
        <NextArrow />
      </Link>
    );
  };
  render() {
    const { path = "/" } = this.props;
    return <Route exact path={path} render={this.renderLink} />;
  }
}
// add loading of state here
export default NextButton;
