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
import ContactInfoExternal from "Screens/ContactInfoExternal";

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
      validPosition,
      validInput
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
              validPosition ? 
              <ContactInfo
                {...props}
                onSubmit={() => {
                  createReport();
                }}
              /> :
              <ContactInfoExternal
                {...props}
                onSubmit={() => {
                  createReport();
                }}
              /> 
            )}
          />
          <Route path="/done/:id" component={Done} />
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
            active={true}
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
            active={validInput}
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
    images = [],
    validPosition,
    description = ""
  } = report;
  const {
    acceptedCookies = false,
    sendingState = "none",
    mapScreenClicked,
    validInput,
    loading,
    loadingMessage = false
  } = ui;
  return {
    acceptedCookies,
    sendingState,
    previews,
    validInput,
    validPosition,
    images,
    description,
    mapScreenClicked,
    loading,
    loadingMessage,
    texts
  };
}

export default connect(
  mapStateToProps,
  { createReport }
)(App);