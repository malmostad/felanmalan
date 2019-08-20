import React, { Component } from "react";

class TitleHolder extends Component {
  render() {
    const { children = null } = this.props;
    return (
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto"
        }}
      >
        {children}
      </div>
    );
  }
}

export default TitleHolder;
