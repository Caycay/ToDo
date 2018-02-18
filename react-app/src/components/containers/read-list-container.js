import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ListsView from '../lists-view';
import {connect} from 'react-redux';
import ListName from "../list-name";
import {apiServer} from "../../constant/const";

export class ListsContainer extends Component {
     constructor(){
         super();
         this.state = {
             lists: []
         };

     }
    componentWillMount(){
        this.getAllLists();

    }
    render() {
        return (
            <ListsView
                list={this.generateListView()}
            />
        );
    }

    getAllLists = () => {
        this.props.actions.getAllLists().payload.then(result => {
            this.setState({lists: result});
        });
    };

    remove = id => {
        console.log(id);
        this.props.actions.remove(apiServer.method.listWithId, id);
        window.location.reload();
    };

    generateListView() {
        if((this.state.lists || []).length === 0) {
            return null;
        }
        return this.state.lists.map((list, index) => {

            return (
                <ListName list={list} onClick={this.remove} key={index}/>
            );
        })
    }
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
        lists: state.lists
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListsContainer);
