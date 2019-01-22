import React, { Component } from "react";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import { reportAdd } from "./redux/actions";

const { TextArea } = Input;

class Info extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.reportAdd(values);
      }
    });
  };

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        style={{ paddingLeft: "50px", maxWidth: "800px" }}
        onSubmit={this.handleSubmit}
        className="login-form"
      >
        <Form.Item {...formItemLayout} label="Email">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Problem description">
          {getFieldDecorator("message")(
            <TextArea autosize={{ minRows: 4, maxRows: 6 }} />
          )}
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
