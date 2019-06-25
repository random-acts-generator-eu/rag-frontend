import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ContactspageView from './components/Contacts/ContactsPageView';
import './reset.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={ContactspageView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
