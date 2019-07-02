import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import { reportAdd } from "redux/actions";
import ScreenTitle from "Components/ScreenTitle";
import FormItem from "Components/FormItem";

class ContactInfo extends Component {
  state = {
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

  render() {
    // make this more modular
    const { longitude, latitude, description } = this.props;
    if (!longitude || !latitude || !description) {
      return <Redirect to="/" />;
    }
    return (
      <Layout>
        <ScreenTitle
          strongTextLast={true}
          titleStrong="kontaktuppgifter"
          title="Lämna dina "
        />
        <Layout className="content">
          <form onSubmit={this.onSubmit}>
            <FormItem
              onChange={this.onInputChange}
              label="E-post eller telefonnummer"
              type="email-or-phone"
              value={this.state.inputValue}
              placeholder="Skriv din e-postadress eller ditt telefonnumer"
            />
            <button style={{ visibility: "hidden" }} type="submit">
              Skicka in felanmälan
            </button>
          </form>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {}, ui } = state;
  const { email, phone, longitude, latitude, description } = report;
  const { sendingState = "none" } = ui;
  return { email, phone, sendingState, longitude, latitude, description };
}

export default connect(
  mapStateToProps,
  { reportAdd }
)(withRouter(ContactInfo));
