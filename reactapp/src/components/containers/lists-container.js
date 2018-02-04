import React from 'react';
import {connect} from 'react-redux';
import Lists from "../lists";
import {getLists} from "../../actions/list-action";

export class ListsContainer extends React.Component {
    componentWillMount() {
        this.props.dispatch(getLists());
        console.log(this.props);
    }

    render() {
        return (
            <Lists list={this.props.list}/>
        )
    }
}


export default connect((store) => {
    return {
        list: store.list.list
    };
})(ListsContainer)