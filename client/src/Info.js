import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const { TextArea } = Input;

class Info extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Additional Information about the Report">
          <TextArea autosize={{ minRows: 4, maxRows: 6 }} />
        </Form.Item>
      </Form>
    );
  }
}

const WrappedInfo = Form.create({ name: "info" })(Info);

export default WrappedInfo;
