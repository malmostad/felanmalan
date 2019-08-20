import React, { Component } from "react";
import { connect } from "react-redux";

import { reportAdd, inputFocus, inputBlur } from "redux/actions";
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
    this.props.inputFocus();
    this.setState({ focus: true });
  };
  onBlur = event => {
    this.props.inputBlur();
    this.setState({ focus: false });
  };

  // TODO: auto size textarea
  render() {
    const { focus } = this.state;
    return (
      <div>
        <LargeHeader>
          <ScreenTitle titleStrong="Beskriv problemet" />
        </LargeHeader>
        <InputContent focus={focus}>
          <label>Beskrivning</label>
          <textarea
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            style={{
              fontSize: "18px",
              borderBottom: "none",
              height: focus ? "80px" : "35px"
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
  { reportAdd, inputBlur, inputFocus }
)(Info);
