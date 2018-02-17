import initialState from './initial-state';
import objectAssign from 'object-assign';
import * as types from '../constant/action-types'
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
        case types.UPDATE_LIST: {
            newState = objectAssign({}, action.settings);
            newState[action.fieldName] = action.value;
            return newState;
        }
        default:
            return state;
    }
}