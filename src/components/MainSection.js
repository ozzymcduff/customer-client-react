import React, { Component } from 'react';
import PropTypes from "prop-types";
import Customer from './Customer';

export default class MainSection extends Component {
  static propTypes = {
    customers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }
  refreshCommand(){
    console.log('refresh');
  }

  render() {
    const { customers, actions } = this.props;
    let isBusy = (<div>isBusy</div>);
    return (<section>
        {isBusy}
        <div>
          {customers.map(customer =>
            <Customer key={customer.id} customer={customer} {...actions} />
          )}
        </div>
        <button onClick={this.refreshCommand}>Refresh</button>
    </section>)
    }
}
