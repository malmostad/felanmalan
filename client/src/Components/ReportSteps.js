import React, { Component } from "react";
import { Steps, Layout } from "antd";
const { Sider } = Layout;
const Step = Steps.Step;
const steps = [
  {
    title: "Location",
    description: "Pick the location you'd like to report"
  },
  {
    title: "Photo",
    description: "Add a photo to you report"
  },
  {
    title: "Additional Info",
    description: "Provide additional info about the problem"
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
    const { current } = this.state;
    return (
      <Sider width="250" style={{ backgroundColor: "white" }}>
        <Steps
          style={{ padding: "0 25px" }}
          direction="vertical"
          current={current}
        >
          {steps.map(item => (
            <Step
              key={item.title}
              description={item.description}
              title={item.title}
            />
          ))}
        </Steps>
      </Sider>
    );
  }
}
// add loading of state here
export default ReportSteps;
