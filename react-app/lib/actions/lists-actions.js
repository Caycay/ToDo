import * as types from '../constant/action-types';
import ApiService from "../api/services/api-http-service";
import { apiServer } from "../constant/const";

export function setLists() {
    return function (dispatch) {
        return dispatch({
            type: types.SET_LISTS,
            payload: ApiService.apiGetAll(apiServer.method.lists)
        });
    };
}
export function setItems(listId) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_ITEMS,
            payload: ApiService.apiGetById(apiServer.method.listItemWithId, listId)
        });
    };
}
export function setList(listId) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_LIST,
            payload: ApiService.apiGetById(apiServer.method.listWithId, listId)
        });
    };
}
export function setItem(idL, idI) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_ITEM,
            payload: ApiService.apiGetItem(apiServer.method.itemWithListId, idL, idI)
        });
    };
}

export function getItemBySingleId(id) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_ITEM,
            payload: ApiService.apiGetById(apiServer.method.itemWithId, id)
        });
    };
}

export function update(settings, endpointUrl) {
    return {
        type: types.UPDATE,
        settings,
        endpointUrl
    };
}
export function createNew(settings, endpointUrl) {
    debugger;
    return {
        type: types.CREATE_NEW,
        settings,
        endpointUrl
    };
}
export function deleteList(endpointUrl, id) {
    debugger;
    return {
        type: types.DELETE,
        endpointUrl,
        id
    };
}
export function deleteItem(endpointUrl, idItem, idList) {
    debugger;
    return {
        type: types.DELETE_ITEM,
        endpointUrl,
        idItem,
        idList
    };
}