import initialState from './initial-state';
import objectAssign from 'object-assign';
import * as types from '../constant/action-types'
import {apiServer} from "../constant/const";
import ApiService from "../api/services/api-http-service";
export default function listReducer(state = initialState, action) {
    let newState;
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
        default:
            return state;
    }
}