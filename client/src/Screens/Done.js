import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

import { reportAdd } from "redux/actions";
import ScreenTitle from "Components/ScreenTitle";

class Done extends Component {
  render() {
    const { description, address } = this.props;
    return (
      <Layout>
        <ScreenTitle titleStrong="skickats" title="Felanmälan har " />
        <Layout className="content">
          {address && <p>{address}</p>}
          <p>{description}</p>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {} } = state;
  return { ...report };
}

export default connect(
  mapStateToProps,
  undefined
)(Done);
