import React, { Component } from "react";
import styles from "./FormItem.module.css";

class InputItem extends Component {
  state = {
    valid: true
  };
  validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  validatePhoneNumber = phone => {
    const reg = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    return reg.test(phone.replace(" ", ""));
  };
  onHandleChange = (event, valid, ...rest) => {
    const { onChange = false } = this.props;
    if (onChange) {
      onChange(event, valid, ...rest);
    }
  };

  onValidate = event => {
    const { type } = this.props;
    let valid = true;
    let isEmail = false;
    if (type === "email") {
      valid = this.validateEmail(event.target.value);
      if (valid) {
        isEmail = true;
      }
      this.setState({ valid });
    }
    if (type === "phone") {
      this.setState({ valid });
    }

    if (type === "email-or-phone") {
      valid = this.validateEmail(event.target.value);
      // add check for phone?
      if (valid) {
        isEmail = true;
      } else {
        valid = this.validatePhoneNumber(event.target.value);
      }
      this.setState({ valid });
    }
    this.onHandleChange(event, valid, isEmail);
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
