import React from 'react';
import {Button} from "react-materialize";

const BtnAdd = ({onSaveClick}) => (
    <div className="add-item">
        <div id="addListBtn">
            <Button floating large className='btn-add' waves='light' icon='add' onClick={onSaveClick}/>
        </div>
    </div>
);

export default BtnAdd;