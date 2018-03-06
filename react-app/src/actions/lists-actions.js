import * as types from '../constant/action-types';
import ApiService from "../api/services/api-http-service";
import {apiServer} from "../constant/const";

export function setLists(lists){
    return function (dispatch){
        return dispatch({
            type: types.SET_LISTS,
            payload: lists
        });
    }
}
export function setItems(items){
    return function (dispatch){
        return dispatch({
            type: types.SET_ITEMS,
            payload: items
        });
    }
}
export function createNew(object){
    return{
        type: types.CREATE_NEW,
        payload: object
    }
}
export function setNewItem(item){
    return{
        type: types.SET_NEW_ITEM,
        payload: item
    }
}
export function setNewList(list){
    return{
        type: types.SET_NEW_LIST,
        payload: list
    }
}


export function setList(listId){
    return function (dispatch){
        return dispatch({
            type: types.SET_LIST,
            payload: ApiService.apiGetById(apiServer.method.listWithId, listId)
        });
    }
}
export function setItem(item){
    return function (dispatch){
        return dispatch({
            type: types.SET_ITEM,
            payload: item
        });
    }
}
export function getItemBySingleId(id){
    return function (dispatch){
        return dispatch({
            type: types.SET_ITEM,
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

