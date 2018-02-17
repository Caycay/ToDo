import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListEdit from '../list-edit'
export class EditListContainer extends Component {
    constructor(){
        super();
        this.state = {
            list: {}
        }
    }
    componentWillMount(){
        const id = this.props.match.params.id;
        this.getListById(id);
    }
    updateList = e =>{
        this.props.actions.updateList(this.state.list, e.target.name, e.target.value)
    };
    getListById = (id) => {
        this.props.actions.getListById(id).payload.then(result => {
            this.setState({list: result});
        });
    };
    render() {
        return (
            <ListEdit
                list={this.state.list}
                onChange={this.updateList}
            />
        );
    }
}
EditListContainer.propTypes = {
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
        list: state.list
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditListContainer);