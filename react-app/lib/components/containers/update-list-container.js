import React, { Component } from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListEdit from '../list-edit';
import { apiServer } from "../../constant/const";
import ApiService from "../../api/services/api-http-service";

export class UpdateListContainer extends Component {

    constructor() {
        super();

        this.update = e => {
            let list = Object.assign({}, this.props.list);
            list[e.target.name] = e.target.value;
            this.props.actions.setNewList(list);
        };

        this.saveList = () => {
            let list = this.props.list;
            ApiService.apiPut(apiServer.method.listWithId, list);
        };

        this.setList = id => {
            ApiService.apiGetById(apiServer.method.listWithId, id).then(x => {
                this.props.actions.setList(x);
            });
        };

        this.state = {
            list: {}
        };
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        this.setList(id);
    }

    render() {
        return React.createElement(ListEdit, {
            list: this.props.list,
            onChange: this.update,
            onSaveClick: this.saveList
        });
    }
}
UpdateListContainer.propTypes = {
    actions: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
function mapStateToProps(state) {
    return {
        list: state.lists.list
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdateListContainer);