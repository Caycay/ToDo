import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from "react-router-redux";
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from '../reducers';

export const history = createHistory();

function configureStore(initalState) {

    const reactRouterMiddleware = routerMiddleware(history);

    const middlewares = [thunk, reactRouterMiddleware];

    return createStore(rootReducer, initalState, compose(applyMiddleware(...middlewares)));
}

export default configureStore;