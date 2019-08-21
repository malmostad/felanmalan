import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import {
  reportAdd,
  inputFocus,
  inputBlur,
  updateInputValidation
} from "redux/actions";
import ScreenTitle from "Components/ScreenTitle";
import LargeHeader from "Components/LargeHeader";
import InputContent from "Components/InputContent";
import FormItem from "Components/FormItem";

class ContactInfo extends Component {
  state = {
    focus: false,
    inputValue: "",
    isEmail: false
  };

  componentWillReceiveProps(nextProps) {
    const { sendingState: currentSendingState } = this.props;
    if (currentSendingState === "pending") {
      if (nextProps.sendingState === "none") {
        this.props.history.push("/done");
      }
    }
  }
  componentDidMount() {
    const { description, email = "", phone = "" } = this.props;
    this.setState({
      description,
      inputValue: email.length > 0 ? email : phone
    });
  }
  onInputChange = (event, valid, isEmail = false) => {
    const { reportAdd } = this.props;
    // TODO: fix better solution for this
    const value = event.target.value;
    this.setState({ inputValue: value, isEmail });
    this.props.updateInputValidation(valid);
    if (valid && isEmail) {
      return reportAdd({
        email: value,
        phone: ""
      });
    } else {
      reportAdd({
        email: "",
        phone: value
      });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    const { reportAdd, onSubmit } = this.props;
    const { inputValue = "", isEmail = false } = this.state;
    if (inputValue.length > 0) {
      reportAdd({
        phone: isEmail ? "" : inputValue,
        email: isEmail ? inputValue : ""
      });
      onSubmit && onSubmit();
    }
  };
  onFocus = event => {
    setTimeout(() => {
      document.body.scrollTop = 0;
    }, 40);
    this.props.inputFocus();
    this.setState({ focus: true });
  };
  onBlur = event => {
    this.props.inputBlur();
    this.setState({ focus: false });
  };

  render() {
    // make this more modular
    const { longitude, latitude, description, texts } = this.props;
    const { focus } = this.state;
    if (!longitude || !latitude || !description) {
      return <Redirect to="/" />;
    }
    return (
      <Layout>
        <LargeHeader focus={focus}>
          <ScreenTitle title={texts.contactPageTitle} />
        </LargeHeader>
        <InputContent focus={focus}>
          <form onSubmit={this.onSubmit}>
            <FormItem
              onChange={this.onInputChange}
              label={texts.emailOrPhone}
              type="email-or-phone"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              value={this.state.inputValue}
              placeholder={texts.emailOrPhonePlaceHolder}
            />
            <button style={{ visibility: "hidden" }} type="submit">
              {texts.sendIssueReport}
            </button>
          </form>
        </InputContent>
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {}, ui, texts } = state;
  const { email, phone, longitude, latitude, description } = report;
  const { sendingState = "none" } = ui;
  return { email, phone, sendingState, longitude, latitude, description, texts };
}

export default connect(
  mapStateToProps,
  { reportAdd, inputBlur, inputFocus, updateInputValidation }
)(withRouter(ContactInfo));
