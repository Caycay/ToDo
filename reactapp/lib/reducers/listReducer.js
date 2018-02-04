export default function reducer(state={
    list: [],
    fetching: false,
    fetched: false,
    error: null
    }, action){
    switch (action.type){
        case "CHANGE_LIST": {
            return {...state, list: action.payload};
        }
        default:
            return state;
    }
}
