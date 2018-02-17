import React from 'react';
import Header from "./header";
import {Input} from "react-materialize";

const ListEdit = ({list, onChange}) => (
    <div className="list-edit">
        <Header header={"Edit " + list.name + " list"}/>
        <div className="list-section">
            <div className="collection-item">
                <div className="inputs">
                    <Input name="name" onChange={onChange} label={"New name (old: " + list.name + ")"} value={list.name}/>
                    <Input label={"New description (old: " + list.description + ")"}/>
                </div>
            </div>
            <div className="add-item">
                <div id="addListBtn">
                    <i className="material-icons">add</i>
                </div>
            </div>
        </div>
    </div>
);
export default ListEdit;