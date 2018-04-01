import React from 'react';
import Link from "react-router-dom/es/Link";
import {Input} from "react-materialize";

const ItemName = ({item, onClick}) => (
    <div className="items-list">
        <div className="item">
            <Input name='group1' type='checkbox' value='red'
                   label={item.propertyString + " " + item.propertyString2 + " " + item.propertyNumber}/>

        </div>
        <div className="collection-buttons">
            <Link title="Edit" to={"/edit/item/" + item.id + "/" + item.listId} id={"editBtn"+item.propertyString} className="item-grup"><i
                className="material-icons">mode_edit</i></Link>
            <div className="item-grup" id={"deleteBtn"+item.propertyString} onClick={() => onClick(item.id, item.listId)}><i className="material-icons">delete</i>
            </div>

        </div>
    </div>
);

export default ItemName;