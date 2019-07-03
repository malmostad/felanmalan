import React, { Component } from "react";
import { connect } from "react-redux";

import { reportAdd } from "redux/actions";
import ScreenTitle from "Components/FullScreenTitle";
import LargeHeader from "Components/LargeHeader";
import InputContent from "Components/InputContent";

class Info extends Component {
  state = {
    description: "",
    focus: false
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
  onFocus = event => {
    this.setState({ focus: true });
  };
  onBlur = event => {
    this.setState({ focus: false });
  };

  // TODO: auto size textarea
  render() {
    const { focus } = this.state;
    return (
      <div>
        <LargeHeader>
          <ScreenTitle titleStrong="Beskriv " title="problemet" />
        </LargeHeader>
        <InputContent focus={focus}>
          <label>Beskrivning</label>
          <textarea
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            style={{
              fontSize: "16px",
              borderBottom: focus ? "none" : "solid 1px gray",
              height: focus ? "100px" : "45px"
            }}
            placeholder="Beskriv problemet du vill felanmäla..."
            onChange={this.onHandleChange}
            value={this.state.description}
          />
        </InputContent>
      </div>
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
