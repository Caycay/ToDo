import React from 'react';
import BtnAdd from "./btn-add";
import {Input} from "react-materialize";
import Header from "./header";
import Link from "react-router-dom/es/Link";

const ListAdd = ({list, onChange, onSaveClick}) => (
    <div>
        <div className="list-edit">
            <Header header={"Add list"}/>
            <div className="list-section">
                <div className="collection-item">
                    <div className="inputs">
                        <Input name="name" onChange={onChange} label="New name" value={list.name}/>
                        <Input name="description" onChange={onChange} label="New description" value={list.description}/>
                    </div>
                    <Link title="Save" to={"/"} className="item-grup">

                        <BtnAdd onSaveClick={onSaveClick}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default ListAdd;