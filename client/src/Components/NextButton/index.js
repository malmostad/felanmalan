import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./NextButton.module.css";
import nextArrow from "./next.svg";
class NextButton extends Component {
  render() {
    const { to = "/", text = null } = this.props;
    return (
      <Link className={styles.nextButton} to={to}>
        { text }
        <img src={nextArrow} alt="Nästa steg" />
      </Link>
    );
  }
}
// add loading of state here
export default NextButton;
