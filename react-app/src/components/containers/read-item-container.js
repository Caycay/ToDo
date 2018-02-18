import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ItemsView from '../items-view';
import {connect} from 'react-redux';
import ItemName from "../item-name";
import {apiServer} from "../../constant/const";

class ItemsContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }
    componentWillMount(){
        const id = this.props.match.params.id;
        this.getAllItems(id);
    }
    render() {
        return (
            <ItemsView
                items={this.generateListView()}
                id = {this.props.match.params.id}
            />
        );
    }
    getAllItems = (id) => {
        this.props.actions.getAllItems(id).payload.then(result => {
            this.setState({items: result});
        });
    };
    remove = id => {
        this.props.actions.remove(apiServer.method.itemWithId, id);
       // window.location.reload();
    };
    generateListView() {
        if((this.state.items || []).length === 0) {
            return null;
        }
        return this.state.items.map((item, index) => {
            console.log(item);

            return (
                <ItemName item={item} onClick={this.remove} key={index}/>
            );
        })
    }
}
ItemsContainer.propTypes = {
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
        items: state.items
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsContainer);
