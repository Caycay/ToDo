import * as types from '../constant/action-types';
import ApiService from "../api/services/api-http-service";
import {apiServer} from "../constant/const";

export function getAllLists(){
    return function (dispatch){
        return dispatch({
            type: types.GET_LISTS,
            payload: ApiService.apiGetAll(apiServer.method.lists)
        });
    }
}
export function getAllItems(listId){
    return function (dispatch){
        return dispatch({
            type: types.GET_ITEMS,
            payload: ApiService.apiGetById(apiServer.method.listItemWithId, listId)
        });
    }
}
export function getListById(listId){
    return function (dispatch){
        return dispatch({
            type: types.GET_LIST_BY_ID,
            payload: ApiService.apiGetById(apiServer.method.listWithId, listId)
        });
    }
}
export function getItemById(id){
    return function (dispatch){
        return dispatch({
            type: types.GET_ITEM_BY_ID,
            payload: ApiService.apiGetById(apiServer.method.itemWithId, id)
        });
    }
}
export function update(settings, endpointUrl){
    return{
        type: types.UPDATE,
        settings,
        endpointUrl
    }
}
export function createNew(settings, endpointUrl){
    debugger;
    return{
        type: types.CREATE_NEW,
        settings,
        endpointUrl
    }
}
export function remove(endpointUrl, id){
    debugger;
    return{
        type: types.DELETE,
        endpointUrl,
        id
    }
}