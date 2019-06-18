import React, { Component } from "react";
import styles from "./Steps.module.css";
import { withRouter } from "react-router-dom";

const steps = [
  {
    title: "Location",
    path: "/"
  },
  {
    title: "Photo",
    path: "/photo"
  },
  {
    title: "Additional Info",
    path: "/info"
  },
  {
    title: "Contact info",
    path: "/contact-info"
  }
];

class Steps extends Component {
  render() {
    const { location = {} } = this.props;
    const { pathname = "" } = location;
    return (
      <ul className={styles.ul}>
        {steps.map(item => (
          <li
            key={item.path}
            className={item.path === pathname ? styles.active : ""}
          ></li>
        ))}
      </ul>
    );
  }
}

export default withRouter(Steps);
