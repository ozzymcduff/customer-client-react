import $ from 'jquery';
import { parseXmlCustomers } from './adapters/Xml';
import * as types from './constants/ActionTypes';

export default function loadData(store){
    return $.ajax({
        url:'/CustomerService.svc/GetAllCustomers',
        dataType: 'xml',
        success:(data)=>{
            store.dispatch({
                type: types.ADD_CUSTOMERS,
                infos: parseXmlCustomers(data)
            });
        }
    });
}