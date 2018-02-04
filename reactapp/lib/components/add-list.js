import React, {Component} from 'react';

class AddList extends Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" required ref="newItem" />
                <input type="submit" value="Hit me"/>
            </form>
        )
    }
    handleChange(e){
        this.setState({value: e.taret.value});
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.refs.newItem.value);
    }
}
export default AddList;