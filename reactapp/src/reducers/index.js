import { combineReducers } from 'redux'
import list from './listReducer'

const todoApp = combineReducers({
    list
});

export default todoApp