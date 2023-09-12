import React, { Component } from 'react';
import PropTypes from "prop-types";
import TextInput from './TextInput';
import _ from 'lodash';

export default class Customer extends Component {
  static propTypes = {
    customer: PropTypes.object.isRequired,
    editCustomer: PropTypes.func.isRequired,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      dirty: false
    };
  }
  handleSaveLastName(customer, text) {
    if (customer.lastName!==text){
      this.props.editCustomer(customer.id, _.extend(_.clone(customer),{lastName:text}));
      this.setState({ dirty: true });
    }
  }
  render() {
    const {customer} = this.props;
    let isDirty = '';
    if (this.state.dirty)
      isDirty = (<div>isDirty</div>);
    return (<div>
                {isDirty}
                <div aria-label="First Name">{customer.firstName}</div>
                <TextInput label="Last Name" text={customer.lastName}
                       onSave={(text) => this.handleSaveLastName(customer, text)} />
            </div>);
    }
}
