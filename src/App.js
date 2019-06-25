import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import './reset.css';

import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Navigation />
          <Login />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
