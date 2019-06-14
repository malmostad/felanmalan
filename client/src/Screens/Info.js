import React, { Component } from "react";
import { Button, Layout, Form, Input } from "antd";
import { connect } from "react-redux";
import { reportAdd, createReport } from "../redux/actions";
import { Link } from "react-router-dom";
import TrackingService from "../TrackingService";
import ErrorReportHeader from "../Components/Header";
const { track } = TrackingService;

const { TextArea } = Input;

class Info extends Component {
  onChange = e => {
    e.preventDefault();
    // maybe dont add value on validate
    // store in state and then on send add to store.
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.reportAdd(values);
      } else if (err.email && values.description) {
        this.props.reportAdd({ description: values.description });
      }
    });
  };
  onSubmit = async () => {
    track("Submit Report");
    this.props.createReport();
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
      <Layout>
        <ErrorReportHeader
          title="Foto"
          description="Lägg till ett foto till din rapport för att göra det lättare för våra förvaltare att hitta problemet."
        />
        <Form
          style={{ paddingLeft: "50px", maxWidth: "800px" }}
          onChange={this.onChange}
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
            {getFieldDecorator("description")(
              <TextArea autosize={{ minRows: 4, maxRows: 6 }} />
            )}
          </Form.Item>
        </Form>
        <div>
          <Button>
            <Link to="/photo">Previous</Link>
          </Button>
          <Button
            style={{ marginLeft: 8 }}
            type="primary"
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </div>
      </Layout>
    );
  }
}

const WrappedInfo = Form.create({ name: "info" })(Info);

export default connect(
  undefined,
  { reportAdd, createReport }
)(WrappedInfo);
