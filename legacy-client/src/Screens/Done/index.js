import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { clear } from "redux/actions";
import styles from "./Done.module.css";
import NextButton from "Components/NextButton";
import FullScreenTitle from "Components/FullScreenTitle";
import LargeHeader from "Components/LargeHeader";

class Done extends Component {
  componentDidMount() {
    const { clear } = this.props;
    clear();
  }
  render() {
    const { texts = {} } = this.props;
    const external_id = this.props.match.params.id;

    return (
      <div className={styles.donePage}>
        <LargeHeader>
          <FullScreenTitle title={texts.donePageTitle} />
          <p className={styles.text}>
            {texts.donePageText}
            <Link
              target="_blank"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "underline"
              }}
              to={`/track/${external_id}`}
            >
              {" "}
              Ärende: {external_id}{" "}
            </Link>
          </p>
        </LargeHeader>
        <NextButton
          className={styles.button}
          inverted={true}
          text={texts.createNew}
          to="/"
        />
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
