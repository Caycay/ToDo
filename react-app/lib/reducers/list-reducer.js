import initialState from './initial-state';
import objectAssign from 'object-assign';
import * as types from '../constant/action-types';
import ApiService from "../api/services/api-http-service";
import { LOCATION_CHANGE } from "react-router-redux";

export default function listReducer(state = initialState, action) {

    switch (action.type) {
        case types.SET_LISTS:
            {
                return objectAssign({}, state, { lists: action.payload });
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
        case types.SET_NEW_ITEM:
            {
                return objectAssign({}, state, { item: action.payload });
            }
        case types.SET_NEW_LIST:
            {
                return objectAssign({}, state, { list: action.payload });
            }
        case types.CREATE_NEW:
            {
                return ApiService.apiPost(action.endpointUrl, action.settings);
            }
        case LOCATION_CHANGE:
            {
                return initialState;
            }
        default:
            return state;
    }
}