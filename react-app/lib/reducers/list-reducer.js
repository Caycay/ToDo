import initialState from './initial-state';
import objectAssign from 'object-assign';
import * as types from '../constant/action-types';
import ApiService from "../api/services/api-http-service";
export default function listReducer(state = initialState, action) {
    switch (action.type) {
        case types.SET_LISTS:
            {
                return objectAssign({}, state, { list: action.payload });
            }
        case types.SET_ITEMS:
            {
                return objectAssign({}, state, { items: action.payload });
            }
        case types.SET_LIST:
            {
                return objectAssign({}, state, { list: action.payload });
            }
        case types.SET_ITEM:
            {
                return objectAssign({}, state, { item: action.payload });
            }
        case types.UPDATE:
            {
                return ApiService.apiPut(action.endpointUrl, action.settings);
            }
        case types.CREATE_NEW:
            {
                return ApiService.apiPost(action.endpointUrl, action.settings);
            }
        case types.DELETE:
            {
                debugger;
                return ApiService.apiDelete(action.endpointUrl, action.id);
            }
        case types.DELETE_ITEM:
            {
                debugger;
                return ApiService.apiDeleteItem(action.endpointUrl, action.idItem, action.idList);
            }
        default:
            return state;
    }
}