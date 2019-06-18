import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  render() {
    const { to = "/", text = null, active = true } = this.props;
    return (
      <Link
        onClick={this.onClick}
        className={styles.nextButton}
        style={{ opacity: active ? 1 : 0.5 }}
        to={to}
      >
        {text}
        <NextArrow />
      </Link>
    );
  }
}
// add loading of state here
export default NextButton;
