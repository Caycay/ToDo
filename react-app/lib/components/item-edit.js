import React from 'react';
import Header from "./header";
import { Input } from "react-materialize";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";

const ItemEdit = ({ item, onChange, onSaveClick }) => React.createElement(
    "div",
    { className: "list-edit" },
    React.createElement(Header, { header: "Edit item" }),
    React.createElement(
        "div",
        { className: "list-section" },
        React.createElement(
            "div",
            { className: "collection-item" },
            React.createElement(
                "div",
                { className: "inputs" },
                React.createElement(Input, { name: "propertyString", onChange: onChange, label: "first", value: item.propertyString }),
                React.createElement(Input, { name: "propertyString2", onChange: onChange, label: "second", value: item.propertyString2 }),
                React.createElement(Input, { name: "propertyNumber", onChange: onChange, label: "third", value: item.propertyNumber })
            )
        ),
        React.createElement(
            Link,
            { title: "Save", to: "/list/" + item.listId, className: "item-grup" },
            React.createElement(BtnAdd, { onSaveClick: onSaveClick })
        )
    )
);

export default ItemEdit;