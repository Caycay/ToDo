import React, {Component} from 'react';


class ItemName extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {propertyString, propertyString2, propertyNumber} = this.props.item;
        return (
            <div className="items">
                <div className="items__prop">{propertyString}</div>
                <div className="items__prop2">{propertyString2}</div>
                <div className="items__prop3">{propertyNumber}</div>
            </div>

        )
    }
}

export default ItemName;