import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Steps, Layout } from "antd";
const { Sider } = Layout;
const Step = Steps.Step;
const steps = [
  {
    title: "Location",
    description: "Pick the location you'd like to report",
    path: "/"
  },
  {
    title: "Photo",
    description: "Add a photo to you report",
    path: "/photo"
  },
  {
    title: "Additional Info",
    description: "Provide additional info about the problem",
    path: "/info"
  }
];

class ReportSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    const { location = {} } = this.props;
    const { pathname = "" } = location;
    return (
      <Steps style={{ padding: "0 25px" }} direction="horizontal">
        {steps.map(item => (
          <Step
            status={item.path === pathname ? "process" : "wait"}
            key={item.title}
            description={item.description}
            title={item.title}
          />
        ))}
      </Steps>
    );
  }
}
// add loading of state here
export default withRouter(ReportSteps);
