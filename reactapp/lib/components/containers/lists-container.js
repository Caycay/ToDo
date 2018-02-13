import React from 'react';
import {connect} from 'react-redux';
import Lists from "../lists";
import {setList} from "../../actions/list-action";

export class ListsContainer extends React.Component {
    componentWillMount() {
        this.props.dispatch(setList());
        console.log(this.props);
    }

    render() {
        return (
            <Lists list={this.props.list}/>
        )
    }
}


export default connect((store) => {
    console.log(store);
    return {
        list: store.list.list
    };
})(ListsContainer)