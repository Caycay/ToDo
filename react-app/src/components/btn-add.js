import React, {Component} from 'react';
import {Button} from "react-materialize";
import {Link} from "react-router-dom";

const BtnAdd = ({onSaveClick}) => (
    <div className="add-item">
        <div id="addListBtn">
                <Button floating large className='btn-add' waves='light' icon='add' onClick={onSaveClick}/>
        </div>
    </div>
);

export default BtnAdd;