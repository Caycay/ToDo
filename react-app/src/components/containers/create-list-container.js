import ListAdd from '../list-add'
import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {apiServer} from "../../constant/const";
import apiService from "../../api/services/api-http-service";

class CreateListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: {}
        };
    };

    addValue = e => {
        let list = Object.assign({}, this.props.list);
        list[e.target.name] = e.target.value;
        this.props.actions.setNewList(list);
    };

    createNew = () => {
        apiService.apiPost(apiServer.method.lists, this.props.list);
        window.location.reload();
    };

    render() {
        return (
            <ListAdd
                list={this.props.list}
                onChange={this.addValue}
                onSaveClick={this.createNew}
            />
        );
    }
}

CreateListContainer.propTypes = {
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
        list: state.lists.list
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateListContainer);