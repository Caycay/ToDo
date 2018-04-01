import React from 'react';
import Header from "./header";
import {Input} from "react-materialize";
import BtnAdd from "./btn-add";
import Link from "react-router-dom/es/Link";

const ListEdit = ({list, onChange, onSaveClick}) => (
    <div className="list-edit">
        <Header header={"Edit list"}/>
        <div className="list-section">
            <div className="collection-item">
                <div className="inputs">
                    <Input id="name" name="name" onChange={onChange} label="New name" value={list.name}/>
                    <Input id="description" name="description" onChange={onChange} label="New description" value={list.description}/>
                </div>
                <Link title="Save" to={"/"} className="item-grup">
                    <BtnAdd onSaveClick={onSaveClick}/>
                </Link>
            </div>
        </div>
    </div>
);

export default ListEdit;