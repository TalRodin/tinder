import React from 'react';
import './App.css';
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
           <Route path='/chat'>
              <h1>chat</h1>
           </Route>
           <Route path='/'>
              <TinderCards/>
              <SwipeButtons/>
          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
