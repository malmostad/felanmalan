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
import Title from "Components/FullScreenTitle";
import LargeHeader from "Components/LargeHeader";
import InputContent from "Components/InputContent";
import FormItem from "Components/FormItem";

import styles from "./ContactInfo.module.css";

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
        this.props.history.push(`/done/${nextProps.external_id}`);
      }
    }
  }
  componentDidMount() {
    const { description, email = "", phone = "", name = "" } = this.props;
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
    this.props.updateInputValidation(valid);
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
  onCheckBoxChange = event => {
    const { reportAdd } = this.props;
    reportAdd({
      allow_contact: event.target.checked
    });
  };

  render() {
    // make this more modular
    const {
      longitude,
      latitude,
      description,
      texts,
      allow_contact
    } = this.props;
    if (!longitude || !latitude || !description) {
      return <Redirect to="/" />;
    }
    return (
      <Layout>
        <LargeHeader>
          <Title title={texts.contactPageTitle} />
        </LargeHeader>
        <InputContent>
          <form onSubmit={this.onSubmit}>
            <FormItem
              onChange={this.onEmailOrPhoneChange}
              label={texts.emailOrPhone}
              type="email-or-phone"
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              value={this.state.emailOrPhone}
              placeholder={texts.emailOrPhonePlaceHolder}
            />
            <div>
              <label className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  defaultChecked={allow_contact}
                  onChange={this.onCheckBoxChange}
                />
                {texts.contactPageCanWeReachOutToYou}
              </label>
              <button style={{ visibility: "hidden" }} type="submit">
                {texts.sendIssueReport}
              </button>
            </div>
            {allow_contact && (
              <FormItem
                onChange={this.onNameChange}
                label={texts.name}
                type="name"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                value={this.state.name}
                placeholder={texts.namePlaceholder}
              />
            )}
          </form>
        </InputContent>
      </Layout>
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
    allow_contact
  } = report;
  const { sendingState = "none" } = ui;
  return {
    email,
    phone,
    name,
    sendingState,
    allow_contact,
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
)(withRouter(ContactInfo));
