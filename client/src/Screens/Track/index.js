import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

import { fetchIssueStatus } from "redux/actions";
import styles from "./Track.module.css";
import FullScreenTitle from "Components/FullScreenTitle";
import TrackCard from "Components/TrackCard";
import LoadingIndicator from "Components/LoadingIndicator";

class Track extends Component {
  componentDidMount() {
    const { fetchIssueStatus } = this.props;
    fetchIssueStatus(1);
  }
  render() {
    const { issueStatus } = this.props;
    const { status = "", loading = false } = issueStatus;
    return (
      <Layout className={styles.background}>
        {loading ? (
          <LoadingIndicator size={80} />
        ) : (
          <div>
            <FullScreenTitle
              strongTextLast={true}
              titleStrong={status}
              title="Ditt ärende är " // intentionally trailing whitespace
            />
            <TrackCard {...issueStatus} />
          </div>
        )}
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { issueStatus = {} } = state;
  return { issueStatus };
}

export default connect(
  mapStateToProps,
  { fetchIssueStatus }
)(Track);
