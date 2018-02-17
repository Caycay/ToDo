import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const ListName = ({list}) => (

    <div className="list-name">
        <Link to={"/list/" + list.id}
              className="item-grup"
              key={list}>{list.name}</Link>
        <div className="collection-buttons">
            <Link title="Edit" to={"/edit/list/" + list.id} className="item-grup" key={list}><i
                className="material-icons">mode_edit</i></Link>
            <Link title="Delete" to={"/list/" + list.id} className="item-grup" key={list}><i
                className="material-icons">delete</i></Link>
        </div>
    </div>

);

export default ListName;