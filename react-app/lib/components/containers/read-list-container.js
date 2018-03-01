import React, { Component } from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import ListsView from '../lists-view';
import { connect } from 'react-redux';
import ListName from "../list-name";
import { apiServer } from "../../constant/const";

export class ListsContainer extends Component {
    constructor() {
        super();

        this.setLists = () => {
            this.props.actions.setLists().payload.then(result => {
                this.setState({ lists: result });
            });
        };

        this.remove = id => {
            this.props.actions.deleteList(apiServer.method.listWithId, id);
            window.location.reload();
        };

        this.state = {
            lists: []
        };
    }
    componentWillMount() {
        this.setLists();
    }
    render() {
        return React.createElement(ListsView, {
            list: this.generateListView()
        });
    }

    generateListView() {
        if ((this.state.lists || []).length === 0) {
            return null;
        }
        return this.state.lists.map((list, index) => {

            return React.createElement(ListName, { list: list, onClick: this.remove, key: index });
        });
    }
}

ListsContainer.propTypes = {
    actions: PropTypes.object.isRequired
    //lists: PropTypes.array.isRequired
};
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
function mapStateToProps(state) {
    return {
        lists: state.lists
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);