import React from 'react';
import Header from "./header";

const ListsView = ({list}) => (
    <div className="list">
        <Header header="All List"/>
        <div className="list-section">
            <div className="collection-item">
                {list}
            </div>
        </div>
    </div>
);

export default ListsView;