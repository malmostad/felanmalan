import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, HashRouter, BrowserRouter } from "react-router-dom";

import { createReport } from "redux/actions";

import Photos from "Screens/Photos";
import Map from "Screens/Map";
import Done from "Screens/Done";
import Track from "Screens/Track";
import Info from "Screens/Info";
import ContactInfo from "Screens/ContactInfo";

import LoadingIndicator from "Components/LoadingIndicator";
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
  renderReportPage() {
    const {
      createReport,
      loading,
      loadingMessage = false,
      email,
      phone,
      description
    } = this.props;

    return (
      <div>
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
          {loading && (
            <LoadingIndicator
              message={loadingMessage}
              style={{ position: "absolute", left: "10px", top: "15px" }}
            />
          )}
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
            active={email.length > 0 || phone.length > 0}
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
    description = "",
    email = "",
    phone = ""
  } = report;
  const {
    sendingState = "none",
    mapScreenClicked,
    loading,
    loadingMessage = false
  } = ui;
  return {
    validPosition,
    sendingState,
    previews,
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
