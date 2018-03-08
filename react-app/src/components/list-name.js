import React from 'react';
import {Link} from 'react-router-dom';

const ListName = ({list, onClick}) => (

    <div className="list-name">
        <Link to={"/list/" + list.id}
              className="item-grup"
              key={list}>{list.name}</Link>
        <div className="collection-buttons">
            <Link title="Edit" to={"/edit/list/" + list.id} className="item-grup"><i className="material-icons">mode_edit</i></Link>
            <div className="item-grup" onClick={() => onClick(list.id)}><i className="material-icons">delete</i></div>

        </div>
    </div>

);

export default ListName;