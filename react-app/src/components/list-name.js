import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class ItemName extends Component {
    render() {
        return (
            <p>
                <Link to={"/list/" + this.props.list.id}
                      className="item-grup"
                      key={this.props.list}>{this.props.list.name}</Link>
            </p>
        )
    }
}

export default ItemName;