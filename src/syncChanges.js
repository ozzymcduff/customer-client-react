import { parseXmlCustomers } from './adapters/Xml';
import * as types from './constants/ActionTypes';

export default function syncChanges(store){
    store.subscribe(()=>{
        let state = store.getState();
        console.log(state);
        /*$.ajax({
            url:'/CustomerService.svc/GetAllCustomers',
            dataType: 'xml',
            success:(data)=>{
                store.dispatch({
                    type: types.ADD_CUSTOMERS,
                    infos: parseXmlCustomers(data)
                });
            }
        });*/
    });
}