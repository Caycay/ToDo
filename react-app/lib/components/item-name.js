import React from 'react';
import Link from "react-router-dom/es/Link";
import { Input } from "react-materialize";

const ItemName = ({ item, onClick }) => React.createElement(
    "div",
    { className: "items-list" },
    React.createElement(
        "div",
        { className: "item" },
        React.createElement(Input, { name: "group1", type: "checkbox", value: "red",
            label: item.propertyString + " " + item.propertyString2 + " " + item.propertyNumber })
    ),
    React.createElement(
        "div",
        { className: "collection-buttons" },
        React.createElement(
            Link,
            { title: "Edit", to: "/edit/item/" + item.id + "/" + item.listId, id: "editBtn" + item.propertyString, className: "item-grup" },
            React.createElement(
                "i",
                {
                    className: "material-icons" },
                "mode_edit"
            )
        ),
        React.createElement(
            "div",
            { className: "item-grup", id: "deleteBtn" + item.propertyString, onClick: () => onClick(item.id, item.listId) },
            React.createElement(
                "i",
                { className: "material-icons" },
                "delete"
            )
        )
    )
);

export default ItemName;