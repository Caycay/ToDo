import React, {Component} from 'react';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <p>{this.props.header} </p>
            </div>
        )
    }

}

export default Header;