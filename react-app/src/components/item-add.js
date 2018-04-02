import React from 'react';
import BtnAdd from "./btn-add";
import {Input} from "react-materialize";
import Header from "./header";
import Link from "react-router-dom/es/Link";

const ItemAdd = ({item, onChange, onSaveClick}) => (
    <div>
        <div className="list-edit">
            <Header header={"Add item"}/>
            <div className="list-section">
                <div className="collection-item">
                    <div className="inputs">
                        <Input id="propertyString" name="propertyString" onChange={onChange} label="first"
                               value={item.propertyString}/>
                        <Input id="propertyString2" name="propertyString2" onChange={onChange} label="second"
                               value={item.propertyString2}/>
                        <Input id="propertyNumber" name="propertyNumber" onChange={onChange} label="third"
                               value={item.propertyNumber}/>
                    </div>
                    <Link title="Save" to={"/list/" + item.listId} className="item-grup">

                        <BtnAdd onSaveClick={onSaveClick}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default ItemAdd;