import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import ItemsView from '../items-view';
import {connect} from 'react-redux';
import ItemName from "../item-name";

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
            />
        );
    }
    getAllItems = (id) => {
        this.props.actions.getAllItems(id).payload.then(result => {
            this.setState({items: result});
        });
    };
    generateListView() {
        if((this.state.items || []).length === 0) {
            return null;
        }
        return this.state.items.map((item, index) => {
            return (
                <ItemName item={item} key={index}/>
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
