import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Item from './components/Item'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import {connect} from "react-redux";
import {setList} from "./actions/listAction"


class App extends Component {
    componentWillMount(){
        this.props.dispatch(setList());
    }
  render() {
    return (
     <Router>
         <div className="container">
             <Route exact path="/" component={Home} />
             <Route path="/list/:id" component={Item} />
         </div>
     </Router>
    );
  }
}

export default connect((store) => {
    return{
        list: store.list.list,
        listFetched: store.list.fetched
    }
})(App);