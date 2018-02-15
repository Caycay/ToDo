import * as types from '../constant/action-types';
import ApiService from "../api/services/api-http-service";
import {apiServer} from "../constant/const";

export function getAllLists(){
    return function (dispatch){
        return dispatch({
            type: types.GET_LISTS,
            payload: ApiService.apiGetList(apiServer.method.lists)
        });
    }
}
export function getAllItems(listId){
    return function (dispatch){
        return dispatch({
            type: types.GET_ITEMS,
            payload: ApiService.apiGetItems(apiServer.method.listItemWithId, listId)
        });
    }
}