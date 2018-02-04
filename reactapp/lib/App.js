import React, { Component } from 'react';
import './App.css';
import Item from './components/item'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ListsContainer from "./components/containers/lists-container";


class App extends Component {
  render() {
    return (
     <Router>
         <div className="container">
             <Route exact path="/" component={ListsContainer} />
             <Route path="/list/:id" component={Item} />
         </div>
     </Router>
    );
  }
}

export default App;