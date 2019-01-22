import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import { reportAdd } from "./redux/actions";

const { TextArea } = Input;

class Info extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.reportAdd(values);
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Additional Information about the Report">
          {getFieldDecorator("message")(
            <TextArea autosize={{ minRows: 4, maxRows: 6 }} />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedInfo = Form.create({ name: "info" })(Info);

export default connect(
  undefined,
  { reportAdd }
)(WrappedInfo);
