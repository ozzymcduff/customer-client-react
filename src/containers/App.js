import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainSection from '../components/MainSection';
import * as CustomerActions from '../actions/CustomerActions';

class App extends Component {
  render() {
    const { customers, actions } = this.props;
    return (<div>
        <h1>Customers</h1>
        <MainSection customers={customers} actions={actions} />
      </div>);
  }
}

function mapState(state) {
  return {
    customers: state.customers
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(CustomerActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(App);
