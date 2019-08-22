import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./CookieConsent.module.css";

import { acceptCookies } from "redux/actions";

import FullScreenTitle from "Components/FullScreenTitle";
import NextButton from "Components/NextButton";

class Intro extends Component {
  state = {
    showMore: false
  };
  onShowMore = () => {
    this.setState({
      showMore: !this.state.showMore
    });

    // render all texts
  };
  render() {
    const { texts = {}, acceptCookies = () => {} } = this.props;
    const { showMore = false } = this.state;
    return (
      <div className={styles.introPage}>
        <div className={styles.introPageContent}>
          <FullScreenTitle showLogo={true} title={texts.introPageTitle} />
          <p className={styles.introPageText}>
            <strong>{texts.introPageIngress}</strong>
            {texts.introPageText}
          </p>
        </div>
        <div
          style={{
            display: showMore ? "block" : "none"
          }}
          className={styles.readMore}
        >
          {texts.CookieReadMoreText}
        </div>
        <div className={styles.actions}>
          <button
            style={{
              display: showMore ? "none" : "block"
            }}
            onClick={this.onShowMore}
            className={styles.readMoreButton}
          >
            {texts.readMore}
          </button>
          <NextButton
            onClick={() => {
              acceptCookies();
            }}
            text={texts.accept}
            inverted={true}
          />
        </div>
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
