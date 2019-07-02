import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import styles from "./NextButton.module.css";

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
