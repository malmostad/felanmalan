import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";

import { createReport } from "redux/actions";

import Photos from "Screens/Photos";
import Map from "Screens/Map";
import Done from "Screens/Done";
import Track from "Screens/Track";
import Info from "Screens/Info";
import CookieConsent from "Screens/CookieConsent";
import ContactInfo from "Screens/ContactInfo";

import LoadingIndicator from "Components/LoadingIndicator";
import BottomBar from "Components/BottomBar";
import NextButton from "Components/NextButton";
import TrackRouteChanges from "Components/TrackRouteChanges";

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
      sendingState,
      description,
      texts,
      validInput,
      validPosition
    } = this.props;

    return (
      <div>
        {acceptedCookies || <CookieConsent />}
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
        <BottomBar
          onRetry={() => {
            createReport();
          }}
        >
          <NextButton
            text={texts.nextStep}
            exact
            path="/map"
            to="/info"
            active={validPosition}
          >
            {loading && (
              <LoadingIndicator
                style={{ position: "absolute", left: "20px", bottom: "25px" }}
              />
            )}
          </NextButton>
          <NextButton exact path="/" text="Nästa steg" to="/map" />
          <NextButton
            path="/info"
            text={texts.nextStep}
            to="/contact-info"
            active={description.length > 0}
          />
          <NextButton
            text={texts.send}
            path="/contact-info"
            to="/done"
            active={true}
            onSubmit={() => {
              createReport();
            }}
          >
            {sendingState === "pending" && (
              <LoadingIndicator
                style={{ position: "absolute", left: "20px", bottom: "25px" }}
              />
            )}
          </NextButton>
        </BottomBar>
      </div>
    );
  }

  render() {
    const Router = getRouter();
    return (
      <Router>
        <TrackRouteChanges>
          <Switch>
            <Route path="/track/:id" component={Track} />
            <Route render={props => this.renderReportPage()} />
          </Switch>
        </TrackRouteChanges>
      </Router>
    );
  }
}

function mapStateToProps(state = {}) {
  const { ui = {}, report = {}, texts = {} } = state;
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
    validInput,
    texts
  };
}

export default connect(
  mapStateToProps,
  { createReport }
)(App);
