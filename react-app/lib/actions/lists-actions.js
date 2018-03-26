import * as types from '../constant/action-types';

export function setLists(lists) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_LISTS,
            payload: lists
        });
    };
}

export function setItems(items) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_ITEMS,
            payload: items
        });
    };
}

export function createNew(object) {
    return {
        type: types.CREATE_NEW,
        payload: object
    };
}

export function setNewItem(item) {
    return {
        type: types.SET_NEW_ITEM,
        payload: item
    };
}

export function setNewList(list) {
    return {
        type: types.SET_NEW_LIST,
        payload: list
    };
}

export function setList(list) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_LIST,
            payload: list
        });
    };
}

export function setItem(item) {
    return function (dispatch) {
        return dispatch({
            type: types.SET_ITEM,
            payload: item
        });
    };
}