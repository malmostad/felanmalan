import React, { Component } from "react";

class InputContent extends Component {
  render() {
    const { children = null, focus = false } = this.props;
    return (
      <div
        className="content"
        style={{
          transition: "all 0.3s ease-out",
          background: "#fff",
          padding: "40px 20px 40px",
          transform: focus ? "translateY(-10px)" : "translateY(0px)"
        }}
      >
        {children}
      </div>
    );
  }
}
export default InputContent;
