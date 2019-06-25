import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";

import { createReport } from "redux/actions";

import Photos from "Screens/Photos";
import Map from "Screens/Map";
import Done from "Screens/Done";
import Info from "Screens/Info";
import ContactInfo from "Screens/ContactInfo";

import LoadingIndicator from "Components/LoadingIndicator";
import Steps from "Components/Steps";
import BottomBar from "Components/BottomBar";
import NextButton from "Components/NextButton";
const getRouter = () => {
  const { REACT_APP_IS_CORDOVA = false } = process.env;
  if (REACT_APP_IS_CORDOVA) {
    return HashRouter;
  }
  return BrowserRouter;
};

class App extends Component {
  componentWillReceiveProps(nextProps) {
    const { sendingState: currentSendingState } = this.props;
    if (currentSendingState === "pending") {
      if (nextProps.sendingState === "none") {
      }
      if (nextProps.sendingState === "failure") {
      }
    }
  }

  render() {
    const {
      createReport,
      loading,
      loadingMessage = false,
      email,
      phone,
      description,
      mapScreenClicked
    } = this.props;
    const Router = getRouter();
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/photo" component={Photos} />
            <Route exact path="/info" component={Info} />
            <Route
              exact
              path="/contact-info"
              render={props => (
                <ContactInfo
                  {...props}
                  onSubmit={() => {
                    createReport();
                  }}
                />
              )}
            />
            <Route excat path="/done" component={Done} />
            <Route component={Map} />
          </Switch>
          <BottomBar disabled={!mapScreenClicked}>
            <Steps />
            {loading && <LoadingIndicator message={loadingMessage} />}
            <NextButton
              text="Nästa steg"
              exact
              path="/"
              active={mapScreenClicked}
              to="/photo"
            />
            <NextButton path="/photo" text="Nästa steg" to="/info" />
            <NextButton
              path="/info"
              text="Nästa steg"
              to="/contact-info"
              active={description.length > 0}
            />
            <NextButton
              text="Skicka felanmälan"
              path="/contact-info"
              to="/done"
              active={email.length > 0 || phone.length > 0}
              onSubmit={() => {
                createReport();
              }}
            />
          </BottomBar>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state = {}) {
  const { ui = {}, report = {} } = state;
  const { images = [], description = "", email = "", phone = "" } = report;
  const {
    sendingState = "none",
    mapScreenClicked,
    loading,
    loadingMessage = false
  } = ui;
  return {
    sendingState,
    images,
    description,
    email,
    phone,
    mapScreenClicked,
    loading,
    loadingMessage
  };
}

export default connect(
  mapStateToProps,
  { createReport }
)(App);
