import React, { Component } from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { apiServer } from "../../constant/const";
import ItemAdd from "../item-add";
import apiService from "../../api/services/api-http-service";

class CreateItemContainer extends Component {

    constructor(props) {
        super(props);

        this.createNew = () => {
            apiService.apiPost(apiServer.method.items, this.props.item);
            window.location.reload();
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
        let item = this.props.item;
        item['listId'] = this.props.match.params.id;
        this.props.actions.setNewItem(item);
    }

    render() {
        const { item } = this.props;
        return React.createElement(ItemAdd, { item: item,
            onChange: this.addValue,
            onSaveClick: this.createNew
        });
    }
}

CreateItemContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateItemContainer);