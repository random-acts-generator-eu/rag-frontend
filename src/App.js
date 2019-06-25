import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './reset.css';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
