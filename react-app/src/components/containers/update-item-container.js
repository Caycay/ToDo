import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ItemEdit from "../item-edit";
import {apiServer} from "../../constant/const";
export class UpdateItemContainer extends Component {
    constructor() {
        super();
        this.state = {
            item: {}
        };
    }

    componentWillMount() {
        debugger;
        const params = this.props.match.params;
        this.setItem(params.idItem, params.idList);
    }

    setItem = (idItem, idList) => {
        this.props.actions.setItem( idList, idItem).payload.then(result => {
            this.setState({item: result});
        });
    };
    saveItem = () =>{
        debugger;
        let item  = this.state.item;
        this.props.actions.update(item, apiServer.method.itemWithId);
    };
    addValue = e => {
        let item = Object.assign({}, this.state.item);
        item[e.target.name] = e.target.value;
        this.setState({item: item});
    };

    render() {
       return (
            <ItemEdit
                item={this.state.item}
                onChange={this.addValue}
                onSaveClick={this.saveItem}
            />
        );
    }
}

UpdateItemContainer.propTypes = {
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
        list: state.list,
        item: state.item
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateItemContainer);