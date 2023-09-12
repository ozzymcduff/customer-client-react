import { parseXmlCustomers } from './adapters/Xml';
import * as types from './constants/ActionTypes';

export default async function loadData(store){
    const data=await fetch('/CustomerService.svc/GetAllCustomers',{
        dataType: 'xml',
    });
    const xml=await data.text();
    store.dispatch({
        type: types.ADD_CUSTOMERS,
        infos: parseXmlCustomers(xml)
    });
}
