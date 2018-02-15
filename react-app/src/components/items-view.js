import React from 'react';
import Header from "./header";

const ItemsView = ({items}) => (
    <div className="list">
        <Header header="All Items"/>
        <div className="list-section">
            <div className="collection-item">
                {items}
            </div>
        </div>
    </div>
);

export default ItemsView;