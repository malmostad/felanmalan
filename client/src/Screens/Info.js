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
    setTimeout(() => {
      document.body.scrollTop = 0;
    }, 40);
    this.setState({ focus: true });
  };
  onBlur = event => {
    this.props.inputBlur();
    this.setState({ focus: false });
  };
  onTouchStart = e => {
    console.log(e);
    e.nativeEvent.preventDefault();
    e.preventDefault();
    e.nativeEvent.stopPropagation();
  };

  // TODO: auto size textarea
  render() {
    const { focus } = this.state;
    const { texts } = this.props;
    return (
      <div>
        <LargeHeader focus={focus}>
          <ScreenTitle title={texts.descriptionTitle} />
        </LargeHeader>
        <InputContent focus={focus}>
          <label>{texts.description}</label>
          <textarea
            onFocus={this.onFocus}
            onTouchStart={this.onTouchStart}
            onBlur={this.onBlur}
            style={{
              fontSize: "18px",
              borderBottom: "none",
              height: "80px"
            }}
            placeholder={texts.descriptionPlaceHolder}
            onChange={this.onHandleChange}
            value={this.state.description}
          />
        </InputContent>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {}, texts } = state;
  const { description } = report;
  return { description, texts };
}

export default connect(
  mapStateToProps,
  { reportAdd, inputBlur, inputFocus }
)(Info);
