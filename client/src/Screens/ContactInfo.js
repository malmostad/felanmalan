import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";


import { reportAdd } from "redux/actions";
import ScreenTitle from "Components/ScreenTitle";
import FormItem from "Components/FormItem";

class ContactInfo extends Component {
  state = {
    email: "",
    phone: ""
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
    const { description } = this.props;
    this.setState({
      description
    });
  }
  onEmailChange = (event, valid) => {
    const { reportAdd } = this.props;
    // TODO: fix better solution for this
    const email = event.target.value;
    this.setState({ email });
    if (valid) {
      return reportAdd({ email });
    }
    reportAdd({ email: "" });
  };
  onPhoneNumberChange = event => {
    const { reportAdd } = this.props;
    // TODO: fix better solution for this
    const phone = event.target.value;
    this.setState({ phone });
    reportAdd({ phone });
  };

  onSubmit = event => {
    event.preventDefault();
    const { reportAdd, onSubmit } = this.props;
    const { phone = "", email = "" } = this.state;
    if (phone.length > 0 && email.length > 0) {
      reportAdd({ phone, email });
      onSubmit && onSubmit();
    }
  };

  render() {
    return (
      <Layout>
        <ScreenTitle strongTextLast={true} titleStrong="kontaktuppgifter" title="Lämna dina " />
        <Layout className="content">
          <form onSubmit={this.onSubmit}>
            <FormItem
              onChange={this.onEmailChange}
              label="E-post"
              type="email"
              value={this.state.email}
              placeholder="Din e-postaddress"
            />
            <FormItem
              onChange={this.onPhoneNumberChange}
              label="Telefonnummer"
              type="phone"
              value={this.state.phone}
            />
            <button style={{ display: "none" }} type="submit">
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
