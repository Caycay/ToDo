import ListAdd from '../list-add';
import React, { Component } from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { apiServer } from "../../constant/const";
import Service from "../../service/service";

class CreateListContainer extends Component {
    constructor(props) {
        super(props);

        this.addValue = e => {
            let list = Object.assign({}, this.state.list);
            list[e.target.name] = e.target.value;
            this.setState({ list: list });
            console.log(this.state);
        };

        this.createNew = () => {
            let list = this.state.list;
            console.log(this.props.actions);
            this.props.actions.createNew(list, apiServer.method.lists);
        };

        this.state = {
            list: {
                name: '',
                description: ''
            }
        };
    }

    render() {
        return React.createElement(ListAdd, {
            list: this.state.list,
            onChange: this.addValue,
            onSaveClick: this.createNew
        });
    }
}
CreateListContainer.propTypes = {
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
        list: state.list
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateListContainer);