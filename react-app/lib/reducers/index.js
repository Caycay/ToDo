import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import lists from './list-reducer';

const rootReducer = combineReducers({
    lists, routing: routerReducer
});

export default rootReducer;