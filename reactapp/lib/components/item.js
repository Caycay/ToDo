import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "./header";
import {Input} from "react-materialize";
class Item extends Component {

    lists = [];
    items = [];
    constructor(props) {
        super(props);
        this.lists = this.props.list;
        this.items = this.getItem();
    }
    getItem(){
        let id = this.props.match.params.id;
        return this.lists.find(x=>x.id.toString() ===  id).items;

    }
    render(){
        let listOfItem;
        if(this.items.length > 0){
            let isChecked;
            listOfItem = this.items.map((item, index)=>{
                return( <Input name='group1' type='checkbox' value={isChecked} label={item.name} />
                    )
            });
        }

        return(
            <div className="list">
                <Header header="All Item"/>
                <div className="list-section">
                    <div className="collection-item">
                        {listOfItem}
                    </div>
                </div>
            </div>
        )
    }

}
export default connect((store) => {
    return{
        list: store.list.list,
        listFetched: store.list.fetched
    }
})(Item);