import ListAdd from '../list-add'
import React, {Component} from 'react'
import {apiServer} from "../../constant/const";
import PropTypes from 'prop-types';
import * as actions from '../../actions/lists-actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


//to do ! 
export class CreateListContainer extends Component {
    constructor(){
        super();
        this.state = {
            list: {}
        }
    }
    create = e =>{
        let list = Object.assign({}, this.state.list);
        list[e.target.name] = e.target.value;
        this.setState({list: list});
    };
    componentWillMount(){
        console.log(this.state.list);
    }
    saveList = () =>{
        let list = this.state.list;
        console.log(this.props.actions);
        this.props.actions.create(list, apiServer.method.lists);
    };
    render() {
        return (
            <ListAdd
                list={this.state.list}
                onChange={this.updateList}
                onSaveClick={this.saveList}
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
        lists: state.lists
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateListContainer);