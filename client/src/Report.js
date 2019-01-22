import React, { Component } from "react";
import { Steps, Button, message, Layout } from "antd";
import Uploader from "./Uploader";
import Map from "./Map";
import Info from "./Info";

const { Sider, Content } = Layout;
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
      <Layout>
        <Layout>
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

          <Content>
            <div style={{ height: "100%" }}>{this.renderStep(current)}</div>
          </Content>
        </Layout>
        <div
          className="steps-action"
          style={{
            paddingTop: "30px",
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <div>
            {current > 0 && (
              <Button onClick={() => this.prev()}>Previous</Button>
            )}
            {current < steps.length - 1 && (
              <Button
                style={{ marginLeft: 8 }}
                type="primary"
                onClick={() => this.next()}
              >
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                style={{ marginLeft: 8 }}
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Report;
