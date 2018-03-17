import React from 'react';
import Header from "./header";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";

const ListsView = ({list}) => (
    <div className="list">
        <Header header="All List"/>
        <div className="list-section">
            <div className="collection-item">
                {list}
                <Link title="Add new list" to={"/add/list/"} className="item-grup">
                    <BtnAdd title={list.description}/>
                </Link>
            </div>
        </div>
    </div>
);

export default ListsView;