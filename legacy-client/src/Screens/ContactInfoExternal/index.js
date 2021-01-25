import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import {
  reportAdd,
  inputFocus,
  inputBlur,
  updateInputValidation
} from "redux/actions";
import Title from "Components/FullScreenTitle";
import LargeHeader from "Components/LargeHeader";
import InputContent from "Components/InputContent";
import FormItem from "Components/FormItem";

import styles from "./ContactInfoExternal.module.css";

class ContactInfoExternal extends Component {
  state = {
    focus: false,
    inputValue: "",
    isEmail: false
  };

  componentWillReceiveProps(nextProps) {
    const { sendingState: currentSendingState } = this.props;
    if (currentSendingState === "pending") {
      if (nextProps.sendingState === "none") {
        this.props.history.push(`/done/${nextProps.external_id}`);
      }
    }
  }
  componentDidMount() {
    const { description, email = "", phone = "", name = "" } = this.props;
    this.props.updateInputValidation(email.length > 0 || phone.length > 0);
    this.setState({
      description,
      name,
      emailOrPhone: email.length > 0 ? email : phone
    });
    this.props.inputBlur();
  }
  onEmailOrPhoneChange = (event, valid, isEmail = false) => {
    const { reportAdd } = this.props;
    // TODO: fix better solution for this
    const value = event.target.value;
    this.setState({ emailOrPhone: value, isEmail });
    this.props.updateInputValidation(valid && value.length > 0);
    if (isEmail) {
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

  onNameChange = event => {
    const { reportAdd } = this.props;
    const value = event.target.value;
    this.setState({ name: value });
    return reportAdd({
      name: value
    });
  };
  onSubmit = event => {
    event.preventDefault();
    const { reportAdd, onSubmit } = this.props;
    const { emailOrPhone = "", isEmail = false, name = "" } = this.state;
    if (emailOrPhone.length > 0) {
      reportAdd({
        phone: isEmail ? "" : emailOrPhone,
        email: isEmail ? emailOrPhone : "",
        name
      });
      onSubmit && onSubmit();
    }
  };
  onFocus = event => {
    this.props.inputFocus();
    this.setState({ focus: true });
  };
  onBlur = event => {
    this.props.inputBlur();
    this.setState({ focus: false });
  };

  render() {
    // make this more modular
    const {
      longitude,
      latitude,
      description,
      texts,
      enable_tracking
    } = this.props;
    if (!longitude || !latitude || !description) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <LargeHeader>
          <Title title={texts.contactPageTitle} />
        </LargeHeader>
        <InputContent>
          <form onSubmit={this.onSubmit}>
              <FormItem
                onChange={this.onNameChange}
                label={texts.name}
                type="name"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                value={this.state.name}
                placeholder={texts.namePlaceholder}
              />
            <FormItem
              onChange={this.onEmailOrPhoneChange}
              label={texts.emailOrPhone}
              type="email-or-phone"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              value={this.state.emailOrPhone}
              placeholder={texts.emailOrPhonePlaceHolder}
            />
          </form>
        </InputContent>
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {}, ui, texts } = state;
  const external_id = ui.external_id;

  const {
    email,
    phone,
    name,
    longitude,
    latitude,
    description,
    enable_tracking
  } = report;
  const { sendingState = "none" } = ui;
  return {
    email,
    phone,
    name,
    sendingState,
    enable_tracking,
    longitude,
    latitude,
    description,
    texts,
    external_id
  };
}

export default connect(
  mapStateToProps,
  { reportAdd, inputBlur, inputFocus, updateInputValidation }
)(withRouter(ContactInfoExternal));
