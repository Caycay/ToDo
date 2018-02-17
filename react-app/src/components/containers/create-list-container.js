import ListAdd from '../list-add'
import React, {Component} from 'react'

export class CreateListContainer extends Component {
    constructor(){
        super();
        this.state = {
            list: {}
        }
    }
    componentWillMount(){
        console.log(this.state.list);
    }
    render() {
        return (
            <ListAdd
                list={this.state.list}
                onSaveClick={this.saveList}
            />
        );
    }
}