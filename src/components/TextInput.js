import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class TextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    label: PropTypes.string,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    this.props.onSave(e.target.value);
  }

  render() {
    return (
      <input type='text'
        autoFocus='true'
        aria-label={this.props.label}
        value={this.state.text}
        onBlur={(e) => this.handleBlur(e)}
        onChange={(e) => this.handleChange(e)}
      />
    );
  }
}
