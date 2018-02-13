import "../style/Home.css";
import TodoItem from "./to-do-item";
import Header from "./header";
import { Component } from 'react';
import * as React from 'react';


class Lists extends Component{


    getList() {
        const lists = [];
        this.lists = this.props.list;
        console.log(this.props);
        debugger;
        if((lists || []).length === 0) {
            return null;
        }

        return lists.map((list, index) => {
            return(
                <TodoItem list={list} key={index}/>
            );
        });
    }

    render(){
        return(
            <div className="list">
                <Header header="All List"/>
                <div className="list-section">
                    <div className="collection-item">
                        {this.getList()}
                    </div>
                </div>
            </div>
        )}

}



export default Lists;