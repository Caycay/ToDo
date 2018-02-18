import initialState from './initial-state';
import objectAssign from 'object-assign';
import * as types from '../constant/action-types'
import ApiService from "../api/services/api-http-service";
export default function listReducer(state = initialState, action) {
    switch (action.type){
        case types.GET_LISTS: {
            return objectAssign({}, state, {list: action.payload});
        }
        case types.GET_ITEMS: {
            return objectAssign({}, state, {items: action.payload});
        }
        case types.GET_LIST_BY_ID: {
            return objectAssign({}, state, {list: action.payload});
        }
        case types.UPDATE: {
            return ApiService.apiPut(action.endpointUrl, action.settings)
        }
        case types.CREATE_NEW: {
            return ApiService.apiPost(action.endpointUrl, action.settings)
        }
        case types.DELETE: {
            return ApiService.apiDelete(action.endpointUrl, action.id)
        }
        default:
            return state;
    }
}