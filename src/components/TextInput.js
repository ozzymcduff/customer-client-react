import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class TextInput extends Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string
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
             value={this.state.text}
             onBlur={this.handleBlur}
             onChange={this.handleChange} />
    );
  }
}
