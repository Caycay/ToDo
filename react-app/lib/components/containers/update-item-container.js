import React, { Component } from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemEdit from "../item-edit";
import { apiServer } from "../../constant/const";
import ApiService from "../../api/services/api-http-service";

export class UpdateItemContainer extends Component {

    constructor() {
        super();

        this.setItem = (idItem, idList) => {
            ApiService.apiGetItemById(apiServer.method.itemWithListId, idList, idItem).then(x => {
                this.props.actions.setItem(x);
            });
        };

        this.saveItem = () => {
            let item = this.props.item;
            ApiService.apiPut(apiServer.method.itemWithId, item);
        };

        this.addValue = e => {
            let item = Object.assign({}, this.props.item);
            item[e.target.name] = e.target.value;
            this.props.actions.setNewItem(item);
        };

        this.state = {
            item: {}
        };
    }

    componentWillMount() {
        const params = this.props.match.params;
        this.setItem(params.idItem, params.idList);
    }

    render() {
        return React.createElement(ItemEdit, {
            item: this.props.item,
            onChange: this.addValue,
            onSaveClick: this.saveItem
        });
    }
}

UpdateItemContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

function mapStateToProps(state) {
    return {
        item: state.lists.item
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItemContainer);