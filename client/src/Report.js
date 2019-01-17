import React, { Component } from "react";
import { Steps, Button, message } from "antd";
import Uploader from "./Uploader";
import Map from "./Map";
import Info from "./Info";

const Step = Steps.Step;
const steps = [
  {
    title: "Location",
    description: "Pick the location you'd like to report"
  },
  {
    title: "Photos",
    description: "Add photos to you report"
  },
  {
    title: "Additional Info",
    description: "Provide additional info about the problem"
  }
];

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  renderStep(step) {
    switch (step) {
      case 0:
        return <Map />;
      case 1:
        return <Uploader />;
      case 2:
        return <Info />;
      default:
        return <Map />;
    }
  }

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step
              key={item.title}
              description={item.description}
              title={item.title}
            />
          ))}
        </Steps>
        <div className="steps-content">{this.renderStep(current)}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

export default Report;
