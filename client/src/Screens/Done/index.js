import React, { Component } from "react";
import { connect } from "react-redux";
import { clear } from "redux/actions";
import styles from "./Done.module.css";
import NextButton from "Components/NextButton";
import FullScreenTitle from "Components/FullScreenTitle";

class Done extends Component {
  componentDidMount() {
    const { clear } = this.props;
    clear();
  }
  render() {
    const { texts = {} } = this.props;
    return (
      <div className={styles.donePage}>
        <div>
          <FullScreenTitle title={texts.donePageTitle} />
          <p className={styles.text}>{texts.donePageText}</p>
        </div>
        <NextButton inverted={true} text={texts.createNew} to="/" />
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { texts } = state;
  return { texts };
}

export default connect(
  mapStateToProps,
  { clear }
)(Done);
