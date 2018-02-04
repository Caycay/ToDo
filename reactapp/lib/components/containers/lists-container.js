import React from 'react';
import {connect} from 'react-redux';
import Lists from "../lists";
import {setList} from "../../actions/listAction";

export class ListsContainer extends React.Component{
    componentWillMount(){
        this.props.dispatch(setList());
    }
    render(){
        return(
            <Lists list={this.props.list}/>
        )
    }
}


export default connect((store) => {
    return{
        list: store.list.list,
        listFetched: store.list.fetched
    }
})(ListsContainer);