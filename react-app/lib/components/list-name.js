import React from 'react';
import { Link } from 'react-router-dom';

const ListName = ({ list, onClick }) => React.createElement(
    'div',
    { className: 'list-name' },
    React.createElement(
        Link,
        { to: "/list/" + list.id,
            className: 'item-grup', id: "listBtn" + list.name,
            key: list },
        list.name,
        ' - ',
        list.description
    ),
    React.createElement(
        'div',
        { className: 'collection-buttons' },
        React.createElement(
            Link,
            { id: "editBtn" + list.name, title: 'Edit', to: "/edit/list/" + list.id, className: 'item-grup' },
            React.createElement(
                'i',
                { className: 'material-icons' },
                'mode_edit'
            )
        ),
        React.createElement(
            'div',
            { id: "deleteBtn" + list.name, className: 'item-grup', onClick: () => onClick(list.id) },
            React.createElement(
                'i',
                { className: 'material-icons' },
                'delete'
            )
        )
    )
);

export default ListName;