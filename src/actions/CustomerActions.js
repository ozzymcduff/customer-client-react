import * as types from '../constants/ActionTypes';

export function addCustomer(info) {
  return {
    type: types.ADD_CUSTOMER,
    info
  };
}

export function deleteCustomer(id) {
  return {
    type: types.DELETE_CUSTOMER,
    id
  };
}

export function editCustomer(id, info) {
  return {
    type: types.EDIT_CUSTOMER,
    id,
    info
  };
}

