import React from 'react';
import Header from "./header";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";

const ListsView = ({ list }) => React.createElement(
    "div",
    { className: "list" },
    React.createElement(Header, { header: "All List" }),
    React.createElement(
        "div",
        { className: "list-section" },
        React.createElement(
            "div",
            { className: "collection-item" },
            list,
            React.createElement(
                Link,
                { title: "Add new list", to: "/add/list/", className: "item-grup" },
                React.createElement(BtnAdd, null)
            )
        )
    )
);

export default ListsView;