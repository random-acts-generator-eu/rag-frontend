import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactspageView from './components/Contacts/ContactsPageView';
import './reset.css';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/footer';
import ServiceLists from './components/ServiceList/ServiceLists';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div main-container>
      <Router>
        <Navigation />
        <div className="app-container">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/contacts" component={ContactspageView} />
            <Route exact path="/service_list" component={ServiceLists} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
