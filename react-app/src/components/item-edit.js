import React from 'react';
import Header from "./header";
import {Input} from "react-materialize";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";

const ItemEdit = ({item, onChange, onSaveClick}) => (
    <div className="list-edit">
        <Header header={"Edit item"}/>
        <div className="list-section">
            <div className="collection-item">
                <div className="inputs">
                    <Input id="propertyString" name="propertyString" onChange={onChange} label="first" value={item.propertyString}/>
                    <Input id="propertyString2" name="propertyString2" onChange={onChange} label="second" value={item.propertyString2}/>
                    <Input id="propertyNumber" name="propertyNumber" onChange={onChange} label="third" value={item.propertyNumber}/>
                </div>
            </div>
            <Link title="Save" to={"/list/" + item.listId} className="item-grup">

                <BtnAdd onSaveClick={onSaveClick}/>
            </Link>
        </div>
    </div>
);

export default ItemEdit;