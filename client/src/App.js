import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, message } from "antd";
import { connect } from "react-redux";
import { Route, Switch, browserHistory } from "react-router-dom";

import { createReport } from "redux/actions";
import Photos from "Screens/Photos";
// import Uploader from "./Screens/Uploader";
import Map from "Screens/Map";
import Done from "Screens/Done";
import Info from "Screens/Info";
import ContactInfo from "Screens/ContactInfo";
import Steps from "Components/Steps";
import BottomBar from "Components/BottomBar";
import NextButton from "Components/NextButton";

const { Content } = Layout;

class App extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    const { sendingState: currentSendingState } = this.props;
    if (currentSendingState === "pending") {
      if (nextProps.sendingState === "none") {
        // message.success("Thanks for reporting!");
      }
      if (nextProps.sendingState === "failure") {
        message.error("There was an error uploading your report!");
      }
    }
  }

  render() {
    const { createReport, email, phone, description } = this.props;
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Content>
            <Switch>
              <Route path="/photo" component={Photos} />
              <Route path="/info" component={Info} />
              <Route path="/contact-info" component={ContactInfo} />
              <Route path="/done" component={Done} />
              <Route component={Map} />
            </Switch>
            <BottomBar>
              <Steps />
              <Route
                exact
                path="/"
                render={() => <NextButton text="Nästa steg" to="/photo" />}
              />
              <Route
                path="/photo"
                render={() => {
                  return <NextButton text="Nästa steg" to="/info" />;
                }}
              />
              <Route
                exact
                path="/info"
                render={() => (
                  <NextButton
                    text="Nästa steg"
                    to="/contact-info"
                    active={description.length > 0}
                  />
                )}
              />
              <Route
                exact
                path="/contact-info"
                render={() => (
                  <NextButton
                    text="Skicka felanmälan"
                    to="/done"
                    active={email.length > 0 || phone.length > 0}
                    onSubmit={() => {
                      createReport();
                    }}
                  />
                )}
              />
            </BottomBar>
          </Content>
        </Layout>
      </Router>
    );
  }
}

function mapStateToProps(state = {}) {
  const { ui = {}, report = {} } = state;
  const { images = [], description = "", email = "", phone = "" } = report;
  const { sendingState = "none" } = ui;
  return { sendingState, images, description, email, phone };
}

export default connect(
  mapStateToProps,
  { createReport }
)(App);
