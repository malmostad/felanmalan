import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, message } from "antd";

import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Uploader from "./Screens/Uploader";
import Map from "./Screens/Map";
import Info from "./Screens/Info";
import ReportSteps from "./Components/ReportSteps";

const { Header, Footer, Content } = Layout;

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
          <Layout>
            <Content>
              <Switch>
                <Route path="/photo" component={Uploader} />
                <Route path="/info" component={Info} />
                <Route component={Map} />
              </Switch>
            </Content>
          </Layout>
          <Footer style={{ textAlign: "center" }}>Malmo Civic Labs</Footer>
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
