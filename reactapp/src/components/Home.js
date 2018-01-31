import "../style/Home.css";
import TodoItem from "./TodoItem";
import Header from "./Header";
import React, { Component } from 'react';
import {connect} from "react-redux";

class Home extends Component{
    lists;
    render(){
        this.lists = this.props.list;
        // let my = Object.keys(this.lists).map((list)=>{
        //     return <div>{list.name}</div>
        // });
        let todo;
        if(this.lists.length > 0){
            todo = this.lists.map((name, index) => {
                return(
                    <TodoItem list={name} key={index}/>
                );
            });
        }
        return(
            <div className="list">
                <Header header="All List"/>
                <div className="list-section">
                    <div className="collection-item">
                        {todo}
                    </div>
                </div>
            </div>
        )}

}



export default connect((store) => {
    return{
        list: store.list.list,
        listFetched: store.list.fetched
    }
})(Home);