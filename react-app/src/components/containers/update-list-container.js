import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListEdit from '../list-edit'
import {apiServer} from "../../constant/const";
export class UpdateListContainer extends Component {
    constructor(){
        super();
        this.state = {
            list: {}
        };
    }
    componentWillMount(){
        console.log(this.props);

        const id = this.props.match.params.id;
        this.getListById(id);
    }
    update = e =>{
        let list = Object.assign({}, this.state.list);
        list[e.target.name] = e.target.value;
        this.setState({list: list});
    };
    saveList = () =>{
      let list = this.state.list;
      this.props.actions.update(list, apiServer.method.listWithId);
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
                onChange={this.update}
                onSaveClick={this.saveList}
            />
        );
    }
}
UpdateListContainer.propTypes = {
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
)(UpdateListContainer);