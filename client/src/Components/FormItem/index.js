import React, { Component } from "react";
import styles from "./FormItem.module.css";

class InputItem extends Component {
  state = {
    valid: true
  };
  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  onHandleChange = (event, valid) => {
    const { onChange = false } = this.props;
    if (onChange) {
      onChange(event, valid);
    }
  };

  onValidate = event => {
    const { type } = this.props;
    let valid = true;
    if (type === "email") {
      valid = this.validateEmail(event.target.value);
      this.setState({ valid });
    }
    if (type === "phone") {
      this.setState({ valid });
    }
    // this.setState({ valid: true });
    this.onHandleChange(event, valid);
  };

  render() {
    const {
      errorMessage = null,
      type = "text",
      label = "",
      value = "",
      ...rest
    } = this.props;
    const { valid } = this.state;
    return (
      <div className={valid ? "" : styles.error}>
        <label>
          {label}
          {!valid ? errorMessage : null}
          <input
            {...rest}
            onChange={this.onValidate}
            className={styles.input}
            type={type}
            value={value}
          />
        </label>
      </div>
    );
  }
}

export default InputItem;
