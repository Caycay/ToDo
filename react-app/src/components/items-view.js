import React from 'react';
import Header from "./header";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";

const ItemsView = ({items, id}) => (
    <div className="list">
        <Header header="All Items"/>
        <div className="list-section">
            <div className="collection-item">
                {items}
                <Link title="Add new list" to={"/add/item/" + id} className="item-grup">
                    <BtnAdd />
                </Link>
            </div>
        </div>
    </div>
);

export default ItemsView;