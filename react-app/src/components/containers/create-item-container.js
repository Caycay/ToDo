import React, {Component} from 'react';
import * as actions from '../../actions/lists-actions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {apiServer} from "../../constant/const";
import ItemAdd from "../item-add";

class CreateItemContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                propertyString: '',
                propertyString2: '',
                propertyNumber: '',
                done: false,
                listId: props.match.params.id

            }
        };
    }

    createNew = () => {
        let item = this.state.item;
        this.props.actions.createNew(item, apiServer.method.items);
    };
    addValue = e => {
        let item = Object.assign({}, this.state.item);
        item[e.target.name] = e.target.value;
        this.setState({item: item});
    };

    render() {
        return (
            <ItemAdd item={this.state.item}
                     onChange={this.addValue}
                     onSaveClick={this.createNew}
            />
        );
    }
}
CreateItemContainer.propTypes = {
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
        item: state.item
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateItemContainer);