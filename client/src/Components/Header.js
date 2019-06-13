import React, { Component } from "react";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    const {
      title = "",
      description = "",
      style = {},
      children = false
    } = this.props;
    return (
      <header style={{ ...styles.header, ...style }}>
        <h1 style={styles.title}>{title}</h1>
        <p>{description}</p>
        {children}
      </header>
    );
  }
}
const styles = {
  header: {
    textAlign: "center",
    padding: "60px 20px 20px"
  },
  title: {
    color: "#244634",
    fontSize: "47px",
    lineHeight: "23px"
  }
};
// add loading of state here
export default Header;
