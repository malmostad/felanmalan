import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./Intro.module.css";

import { acceptCookies } from "redux/actions";

import FullScreenTitle from "Components/FullScreenTitle";
import NextButton from "Components/NextButton";

class Intro extends Component {
  render() {
    const { texts = {}, acceptCookies = () => {} } = this.props;
    return (
      <div className={styles.introPage}>
        <div className={styles.introPageContent}>
          <FullScreenTitle showLogo={true} title={texts.introPageTitle} />
          <p className={styles.introPageText}>
            <strong>{texts.introPageIngress}</strong>
            {texts.introPageText}
          </p>
        </div>
        <NextButton
          onClick={() => {
            acceptCookies();
          }}
          text={texts.accept}
          inverted={true}
        />
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { texts = {} } = state;
  return { texts };
}

export default connect(
  mapStateToProps,
  { acceptCookies }
)(Intro);
