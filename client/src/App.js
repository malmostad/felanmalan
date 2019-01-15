import React, { Component } from "react";
import "./App.less";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Report from "./Report";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Header />
          <Layout>
            <Content
              style={{
                padding: "0 50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Route exact path="/" component={Report} />
            </Content>
          </Layout>
          <Footer style={{ textAlign: "center" }}>Malmo Civic Labs</Footer>
        </Layout>
      </Router>
    );
  }
}

export default App;
