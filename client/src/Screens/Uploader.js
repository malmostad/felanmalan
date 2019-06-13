import React, { Component } from "react";
import { Button, Layout, Upload, Icon, message } from "antd";
import { connect } from "react-redux";
import { photoUploaded } from "../redux/actions";
import { Link } from "react-router-dom";

const Dragger = Upload.Dragger;

// depending on desig break out Uploader to its own component

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
          props.photoUploaded(info.file.response.id);
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    return (
      <Layout>
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
        <div>
          <Button>
            <Link to="/">Previous</Link>
          </Button>
          <Button type="primary">
            <Link to="/info">Next</Link>
          </Button>
        </div>
      </Layout>
    );
  }
}

export default connect(
  undefined,
  { photoUploaded }
)(Uploader);
