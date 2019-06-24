import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

import { clear } from "redux/actions";
import styles from "./Track.module.css";
import FullScreenTitle from "Components/FullScreenTitle";

const MAX_IMAGE_WIDTH_PERCENT = 90;
class Track extends Component {
  state = {
    description: "",
    address: "",
    previews: []
  };
  componentDidMount() {
    const { report, clear } = this.props;
    this.setState({
      ...report
    });
    clear();
  }
  render() {
    const issueStatus = "pågående";
    return (
      <Layout className={styles.background}>
        <FullScreenTitle
          strongTextLast={true}
          titleStrong={issueStatus}
          title="Ditt ärende är " // intentionally trailing whitespace
        />
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {} } = state;
  return { report };
}

export default connect(
  mapStateToProps,
  { clear }
)(Track);
