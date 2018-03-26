import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './app';

export default class Root extends Component {

    render() {
        const { store, history } = this.props;
        return React.createElement(
            Provider,
            { store: store },
            React.createElement(
                ConnectedRouter,
                { history: history },
                React.createElement(App, null)
            )
        );
    }

}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};