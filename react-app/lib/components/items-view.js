import React from 'react';
import Header from "./header";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";

const ItemsView = ({ items, id }) => React.createElement(
    "div",
    { className: "list" },
    React.createElement(Header, { header: "All Items" }),
    React.createElement(
        "div",
        { className: "list-section" },
        React.createElement(
            "div",
            { className: "collection-item" },
            items,
            React.createElement(
                Link,
                { title: "Add new item", to: "/add/item/" + id, className: "item-grup" },
                React.createElement(BtnAdd, null)
            )
        )
    )
);

export default ItemsView;