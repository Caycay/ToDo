import React from 'react';
import { Button } from "react-materialize";

const BtnAdd = ({ onSaveClick }) => React.createElement(
    "div",
    { className: "add-item" },
    React.createElement(
        "div",
        { id: "addListBtn" },
        React.createElement(Button, { floating: true, large: true, className: "btn-add", waves: "light", icon: "add", onClick: onSaveClick })
    )
);

export default BtnAdd;