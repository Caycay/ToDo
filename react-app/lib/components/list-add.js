import React from 'react';
import BtnAdd from "./btn-add";
import { Input } from "react-materialize";
import Header from "./header";
import Link from "react-router-dom/es/Link";

const ListAdd = ({ list, onChange, onSaveClick }) => React.createElement(
    "div",
    null,
    React.createElement(
        "div",
        { className: "list-edit" },
        React.createElement(Header, { header: "Add list" }),
        React.createElement(
            "div",
            { className: "list-section" },
            React.createElement(
                "div",
                { className: "collection-item" },
                React.createElement(
                    "div",
                    { className: "inputs" },
                    React.createElement(Input, { id: "name", name: "name", onChange: onChange, label: "New name", value: list.name }),
                    React.createElement(Input, { id: "description", name: "description", onChange: onChange, label: "New description", value: list.description })
                ),
                React.createElement(
                    Link,
                    { title: "Save", to: "/", className: "item-grup", refresh: "true" },
                    React.createElement(BtnAdd, { onSaveClick: onSaveClick })
                )
            )
        )
    )
);

export default ListAdd;