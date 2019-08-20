import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";

import { createReport } from "redux/actions";

import Photos from "Screens/Photos";
import Map from "Screens/Map";
import Done from "Screens/Done";
import Track from "Screens/Track";
import Info from "Screens/Info";
import Intro from "Screens/Intro";
import ContactInfo from "Screens/ContactInfo";

import LoadingIndicator from "Components/LoadingIndicator";
import BottomBar from "Components/BottomBar";
import NextButton from "Components/NextButton";
import BackButton from "Components/BackButton";
const getRouter = () => {
  const { REACT_APP_IS_CORDOVA = false } = process.env;
  if (REACT_APP_IS_CORDOVA) {
    return HashRouter;
  }
  return BrowserRouter;
};

class App extends Component {
  renderReportPage() {
    const {
      acceptedCookies,
      createReport,
      loading,
      loadingMessage = false,
      description,
      validInput
    } = this.props;

    return (
      <div>
        {acceptedCookies || <Intro />}
        <BackButton />
        <Switch>
          <Route exact path="/map" component={Map} />
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
          <Route component={Photos} />
        </Switch>
        {loading && (
          <LoadingIndicator
            message={loadingMessage}
            style={{ position: "absolute", left: "10px", bottom: "120px" }}
          />
        )}
        <BottomBar
          onRetry={() => {
            createReport();
          }}
        >
          <NextButton text="Nästa steg" exact path="/map" to="/info" />
          <NextButton exact path="/" text="Nästa steg" to="/map" />
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
            active={validInput}
            onSubmit={() => {
              createReport();
            }}
          />
        </BottomBar>
      </div>
    );
  }

  render() {
    const Router = getRouter();
    return (
      <Router>
        <Switch>
          <Route path="/track/:id" component={Track} />
          <Route render={props => this.renderReportPage()} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state = {}) {
  const { ui = {}, report = {} } = state;
  const {
    previews = [],
    validPosition,
    images = [],
    description = ""
  } = report;
  const {
    acceptedCookies = false,
    sendingState = "none",
    mapScreenClicked,
    loading,
    loadingMessage = false,
    validInput = false
  } = ui;
  return {
    acceptedCookies,
    validPosition,
    sendingState,
    previews,
    images,
    description,
    mapScreenClicked,
    loading,
    loadingMessage,
    validInput
  };
}

export default connect(
  mapStateToProps,
  { createReport }
)(App);
