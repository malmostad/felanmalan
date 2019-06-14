import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, message } from "antd";

import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Uploader from "./Screens/Uploader";
import Map from "./Screens/Map";
import Info from "./Screens/Info";
import Steps from "Components/Steps";
import BottomBar from "Components/BottomBar";
import NextButton from "Components/NextButton";

const { Content } = Layout;

class App extends Component {
  componentWillReceiveProps(nextProps) {
    const { sendingState: currentSendingState } = this.props;
    if (currentSendingState === "pending") {
      if (nextProps.sendingState === "none") {
        message.success("Thanks for reporting!");
      }
      if (nextProps.sendingState === "failure") {
        message.error("There was an error uploading your report!");
      }
    }
  }
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Content>
            <Switch>
              <Route path="/photo" component={Uploader} />
              <Route path="/info" component={Info} />
              <Route component={Map} />
            </Switch>
            <BottomBar>
              <Steps />
              <Route
                path="/photo"
                render={() => <NextButton text="Next" to="/info" />}
              />
              <Route exact path="/" render={() => <NextButton to="/photo" />} />
              <Route exact path="/info" render={() => <a href="/">Submit</a>} />
            </BottomBar>
          </Content>
        </Layout>
      </Router>
    );
  }
}

function mapStateToProps(state = {}) {
  const { ui = {} } = state;
  const { sendingState = "none" } = ui;
  return { sendingState };
}

export default connect(mapStateToProps)(App);
