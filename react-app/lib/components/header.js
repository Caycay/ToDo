import React, { Component } from 'react';

class Header extends Component {

    render() {
        return React.createElement(
            "div",
            { className: "header" },
            React.createElement(
                "p",
                null,
                this.props.header,
                " "
            )
        );
    }

}

export default Header;