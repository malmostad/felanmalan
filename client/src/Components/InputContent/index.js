import React, { Component } from "react";

class InputContent extends Component {
  render() {
    const { children = null } = this.props;
    return (
      <div
        className="content"
        style={{
          background: "#fff",
          padding: "40px 20px 40px"
        }}
      >
        {children}
      </div>
    );
  }
}
export default InputContent;
