import React from 'react';
import { Link } from 'react-router-dom';

const ListName = ({ list, onClick }) => React.createElement(
    'div',
    { className: 'list-name' },
    React.createElement(
        Link,
        { to: "/list/" + list.id,
            className: 'item-grup',
            key: list },
        list.name
    ),
    React.createElement(
        'div',
        { className: 'collection-buttons' },
        React.createElement(
            Link,
            { title: 'Edit', to: "/edit/list/" + list.id, className: 'item-grup' },
            React.createElement(
                'i',
                { className: 'material-icons' },
                'mode_edit'
            )
        ),
        React.createElement(
            'div',
            { className: 'item-grup', onClick: () => onClick(list.id) },
            React.createElement(
                'i',
                { className: 'material-icons' },
                'delete'
            )
        )
    )
);

export default ListName;