import React, { Component } from "react";
import { Layout } from "antd";
import { connect } from "react-redux";

import { reportAdd } from "redux/actions";
import ScreenTitle from "Components/ScreenTitle";
import FormItem from "Components/FormItem";

class ContactInfo extends Component {
  state = {
    email: ""
  };
  componentDidMount() {
    const { description } = this.props;
    this.setState({
      description
    });
  }
  onEmailChange = event => {
    // throttle??
    // this.props.reportAdd({ email: event.target.value });
    this.setState({
      email: event.target.value
    });
  };
  onPhoneNumberChange = event => {
    this.setState({
      phone: event.target.value
    });
  };
  onSubmit = () => {
    // go yo
  };

  render() {
    return (
      <Layout>
        <ScreenTitle titleStrong="kontaktuppgifter" title="Lämna dina " />
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
          </form>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state = {}) {
  const { report = {} } = state;
  const { email, phone } = report;
  return { email, phone };
}

export default connect(
  mapStateToProps,
  { reportAdd }
)(ContactInfo);
