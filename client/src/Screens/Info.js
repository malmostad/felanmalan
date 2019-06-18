import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

import { reportAdd } from "redux/actions";
import ScreenTitle from "Components/ScreenTitle";

class Info extends Component {
  state = {
    description: ""
  };
  componentDidMount() {
    const { description } = this.props;
    this.setState({
      description
    });
  }
  onHandleChange = event => {
    // throttle??
    this.props.reportAdd({ description: event.target.value });
    this.setState({
      description: event.target.value
    });
  };

  render() {
    return (
      <Layout>
        <ScreenTitle titleStrong="Beskriv " title="problemet" />
        <Layout className="content">
          <label>Beskrivning</label>
          <textarea
            placeholder="Beskriv problemet du vill felanmäla..."
            onChange={this.onHandleChange}
            value={this.state.description}
          />
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {} } = state;
  const { description } = report;
  return { description };
}

export default connect(
  mapStateToProps,
  { reportAdd }
)(Info);
