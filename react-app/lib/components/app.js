/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import ListsContainer from './containers/read-list-container';
import ItemsContainer from './containers/read-item-container';
import UpdateListContainer from './containers/update-list-container';
import UpdateItemContainer from './containers/update-item-container';
import CreateListContainer from "./containers/create-list-container";
import CreateItemContainer from "./containers/create-item-container";

class App extends Component {

    render() {
        return React.createElement(
            Switch,
            null,
            React.createElement(Route, { exact: true, path: '/', component: ListsContainer }),
            React.createElement(Route, { path: '/list/:id', component: ItemsContainer }),
            React.createElement(Route, { path: '/edit/list/:id', component: UpdateListContainer }),
            React.createElement(Route, { path: '/add/list/', component: CreateListContainer }),
            React.createElement(Route, { path: '/add/item/:id', component: CreateItemContainer }),
            React.createElement(Route, { path: '/edit/item/:idItem/:idList', component: UpdateItemContainer })
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;