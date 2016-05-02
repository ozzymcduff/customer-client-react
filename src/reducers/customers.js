import * as types from '../constants/ActionTypes';

const initialState = [];

export default function customers(state = initialState, action) {
  switch (action.type) {
  case types.ADD_CUSTOMER:
    return [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      info: action.info
    }, ...state];

  case types.DELETE_CUSTOMER:
    return state.filter(customer =>
      customer.id !== action.id
    );

  case types.EDIT_CUSTOMER:
    return state.map(customer =>
      customer.id === action.id ?
        { ...customer, info: action.info } :
        customer
    ); 

  default:
    return state;
    //throw new Error(`Unknown type ${action.type}`);
    //return state;
  }
}