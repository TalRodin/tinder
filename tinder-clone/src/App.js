import React from 'react';
import './App.css';
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Chats from './Chats'
import ChatScreen from './ChatScreen.js'
function App() {
  return (
    <div className="app">     
      <Router>
        <Switch>
           <Route path='/chat/:person'>
           <Header  backButton='/chat'/>
              <ChatScreen/>
    
           </Route>
           <Route path='/chat'>
           <Header  backButton='/'/>
              <Chats/>
           </Route>
           <Route path='/'>
           <Header />
              <TinderCards/>
              <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
