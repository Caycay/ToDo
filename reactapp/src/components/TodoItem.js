import {Button} from 'react-materialize'
import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class TodoItem extends Component {
    handleClick(text){
        console.log("click!" + text, this.props.list.items);
    }
    render(){
        console.log(this.props);
        return(
            <p>
                <Link to={"/list/"+this.props.list.id}
                className="item-grup"
                key={this.props.list}>

                    <Button flat={true} waves="red" onClick={() => this.handleClick("kjkj")} key={this.props.index}>{this.props.list.name}</Button>

                </Link>
            </p>
        )
    }
}

export default TodoItem;