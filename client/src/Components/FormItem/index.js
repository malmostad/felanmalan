import React, { Component } from "react";
import styles from "./FormItem.module.css";

class InputItem extends Component {
  state = {
    valid: true
  }
  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  onHandleChange = event => {
    const { onChange = false } = this.props;
    if (onChange) {
      onChange(event);
    }
  };

  onValidate = event => {
    const { type } = this.props;
    this.onHandleChange(event);
    if (type === "email") {
      const valid = this.validateEmail(event.target.value);
      this.setState({ valid });
      return;
    }
    if (type === "phone") {
      this.setState({ valid: true });
      return;
    }
    this.setState({ valid: true });
  };

  render() {
    const { errorMessage = null, type = "text", label = "", value = "", ...rest } = this.props;
    const { valid } = this.state;
    console.log({valid, label});
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
