import * as types from '../constants/ActionTypes';

export function addCustomer(info) {
  return {
    type: types.ADD_TODO,
    info
  };
}

export function deleteCustomer(id) {
  return {
    type: types.DELETE_TODO,
    id
  };
}

export function editCustomer(id, info) {
  return {
    type: types.EDIT_TODO,
    id,
    info
  };
}

