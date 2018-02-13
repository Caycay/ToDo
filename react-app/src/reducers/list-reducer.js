import initialState from './initial-state';
import objectAssign from 'object-assign';
import * as types from '../constant/action-types'
export default function listReducer(state = initialState.lists, action) {
    let newState;
    switch (action.type){
        case types.GET_LISTS: {
            return objectAssign({}, state, {list: action.payload});
        }
        case types.LOAD_LISTS: {
            return objectAssign({}, state, {list: action.payload});
        }
        default:
            return state;
    }
}