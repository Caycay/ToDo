import * as types from "../actions/action-types";
export default function reducer(state={
    list:[]
    }, action){
    switch (action.type){
        case "CHANGE_LIST": {
            return {...state, list: action.payload};
        }
        case types.LOAD_LISTS: {
            return {...state, list: action.payload};
        }
        default:
            return state;
    }
}
