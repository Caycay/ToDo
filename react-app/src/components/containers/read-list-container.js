import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ListsView from '../lists-view';
import {connect} from 'react-redux';
import ListName from "../list-name";
import {apiServer} from "../../constant/const";
import ApiService from "../../api/services/api-http-service";

export class ListsContainer extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        this.getLists();
        return (
            <ListsView
                list={this.generateListView()}
            />
        );
    };

    getLists() {
        ApiService.apiGetAll(apiServer.method.lists).then(x => {
            this.props.actions.setLists(x);
        });
    };

    remove = id => {
        ApiService.apiDelete(apiServer.method.listWithId, id).then(x => {
            this.getLists();
        });
    };

    generateListView() {

        const {lists} = this.props;
        if ((lists || []).length === 0) {
            return null;
        }
        return lists.map((list, index) => {

            return (
                <ListName list={list} onClick={this.remove} key={index}/>
            );
        })
    };
}

ListsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    //lists: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        lists: state.lists.lists
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListsContainer);
