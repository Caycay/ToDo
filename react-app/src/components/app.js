/* eslint-disable import/no-named-as-default */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import ListsContainer from './containers/list-container';
import ItemsContainer from './containers/item-container';
import EditListContainer from './containers/edit-list-container'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ListsContainer}/>
                <Route path="/list/:id" component={ItemsContainer}/>
                <Route path="/edit/list/:id" component={EditListContainer}/>
            </Switch>
        )
    }
}
App.propTypes = {
    children: PropTypes.element
};
export default App;