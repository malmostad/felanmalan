import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchIssueStatus } from "redux/actions";
import styles from "./Track.module.css";
import FullScreenTitle from "Components/FullScreenTitle";
import TrackCard from "Components/TrackCard";
import LoadingIndicator from "Components/LoadingIndicator";

class Track extends Component {
  componentDidMount() {
    const { fetchIssueStatus } = this.props;
    const issueId = this.props.match.params.id;
    fetchIssueStatus(issueId);
  }
  render() {
    const { issueStatus } = this.props;
    const { status = "", loading = false } = issueStatus;
    return (
      <div className={styles.background}>
        {loading ? (
          <LoadingIndicator size={80} />
        ) : (
          <div>
            <FullScreenTitle
              title={
                <>
                  Ditt ärende är <strong>{status}</strong>
                </>
              }
            />
            <TrackCard {...issueStatus} />
          </div>
        )}
      </div>
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
