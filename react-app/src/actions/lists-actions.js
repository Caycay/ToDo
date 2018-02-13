import * as types from '../constant/action-types';
import ApiService from "../api/services/api-http-service";

export function getAllLists(){
    return function (dispatch){
        return dispatch({
            type: types.GET_LISTS,
            payload: ApiService.apiGet()
        });
    }
}