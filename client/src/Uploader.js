import React, { Component } from "react";
import { Upload, Icon, message } from "antd";
import { connect } from "react-redux";
import { reportAdd } from "./redux/actions";

const Dragger = Upload.Dragger;

class Uploader extends Component {
  render() {
    const props = this.props;
    const config = {
      name: "file",
      multiple: false,
      action: "photos",
      onChange(info) {
        const status = info.file.status;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          props.reportAdd({ imageToken: info.file.response.id });
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return (
      <Dragger {...config}>
        <p className="ant-upload-drag-icon">
          <Icon type="inbox" />
        </p>
        <p className="ant-upload-text">
          Click or drag picture to this area to upload
        </p>
        <p className="ant-upload-hint">
          Strictly prohibited from uploading company data or other band files.
        </p>
      </Dragger>
    );
  }
}

export default connect(
  undefined,
  { reportAdd }
)(Uploader);
