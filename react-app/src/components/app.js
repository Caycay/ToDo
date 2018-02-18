/* eslint-disable import/no-named-as-default */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import ListsContainer from './containers/read-list-container';
import ItemsContainer from './containers/read-item-container';
import EditListContainer from './containers/update-list-container'
import CreateListContainer from "./containers/create-list-container";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ListsContainer}/>
                <Route path="/list/:id" component={ItemsContainer}/>
                <Route path="/edit/list/:id" component={EditListContainer}/>
                <Route path="/add/list/" component={CreateListContainer}/>
            </Switch>
        )
    }
}
App.propTypes = {
    children: PropTypes.element
};
export default App;