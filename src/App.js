import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createHashHistory from 'history/createHashHistory';
// import { Route } from 'react-router'


import Home from './components/home/Home'
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} /> 
            {/* <Route path="/player1" component={this.HomePlayer1}/>
            <Route path="/player2" component={this.HomePlayer2}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
