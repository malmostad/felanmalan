import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, message } from "antd";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { createReport } from "redux/actions";

import Photos from "Screens/Photos";
import Map from "Screens/Map";
import Done from "Screens/Done";
import Track from "Screens/Track";
import Info from "Screens/Info";
import ContactInfo from "Screens/ContactInfo";

import LoadingIndicator from "Components/LoadingIndicator";
import Steps from "Components/Steps";
import BottomBar from "Components/BottomBar";
import NextButton from "Components/NextButton";

const { Content } = Layout;

class App extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      sendingState: currentSendingState,
      validPosition: currentValidPosition
    } = this.props;
    if (currentSendingState === "pending") {
      if (nextProps.sendingState === "failure") {
        message.error("There was an error uploading your report!");
      }
    }
    if (currentValidPosition !== nextProps.validPosition) {
      if (!nextProps.validPosition) {
        message.error("Det är inte Malmö stads mark!");
      }
    }
  }
  renderReportPage() {
    const {
      createReport,
      loading,
      loadingMessage = false,
      email,
      phone,
      description,
      mapScreenClicked,
      validPosition
    } = this.props;
    console.log(validPosition);
    return (
      <Layout>
        <Content>
          <Switch>
            <Route path="/photo" component={Photos} />
            <Route path="/info" component={Info} />
            <Route
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
            <Route path="/done" component={Done} />
            <Route component={Map} />
          </Switch>
          <BottomBar disabled={!mapScreenClicked}>
            <Steps />
            {loading && <LoadingIndicator message={loadingMessage} />}
            { !validPosition && <p style={{color: "white", margin: 0}}>Inte Malmö stads mark!</p> }
            <NextButton
              text="Nästa steg"
              path="/"
              active={mapScreenClicked && validPosition}
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
        </Content>
      </Layout>
    );
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/track/:uuid" component={Track} />
          <Route render={props => this.renderReportPage()} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state = {}) {
  const { ui = {}, report = {} } = state;
  const { validPosition, images = [], description = "", email = "", phone = "" } = report;
  const {
    sendingState = "none",
    mapScreenClicked,
    loading,
    loadingMessage = false
  } = ui;
  return {
    validPosition,
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
