import React, {Component} from 'react';
import {connect} from 'react-redux';
import Lists from "../lists";
import {setList} from "../../actions/list-action";
import ListService from "../../api/list-service";

export class ListsContainer extends Component {
    componentWillMount() {
        ListService.getAllLists().then(x=>{
            debugger;
            if(x){
                x.forEach(y => {

                    this.props.list.push(y);
                });
            }
            console.log(this.props );

        });
    }
    render() {
        console.log(this.props );
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