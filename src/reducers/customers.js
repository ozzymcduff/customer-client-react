import * as types from '../constants/ActionTypes';
import _ from 'lodash';
const initialState = [];

export default function customers(state = initialState, action) {
  function getId(){
    return (state.length === 0) ? 0 : state[0].id + 1;
  }
  switch (action.type) {
  case types.ADD_CUSTOMER:
    let info = action.info;
    return [_.extend(_.clone(info),{id:getId()}), ...state];

  case types.ADD_CUSTOMERS:
    let id = getId();
    let infos = action.infos.map((info,i)=>
      _.extend(_.clone(info),{id:id+i})
    );
    return infos.concat(state);

  case types.DELETE_CUSTOMER:
    return state.filter(customer =>
      customer.id !== action.id
    );

  case types.EDIT_CUSTOMER:
    return state.map(customer =>
      customer.id === action.id ?
        action.info :
        customer
    );

  default:
    return state;
    //throw new Error(`Unknown type ${action.type}`);
    //return state;
  }
}
