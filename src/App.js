/* eslint-disable react/destructuring-assignment */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import ContactspageView from './components/Contacts/ContactsPageView';
import './reset.css';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/footer';
import ServiceLists from './components/ServiceList/ServiceLists';
import Dashboard from './components/Dashboard/Dashboard';

function App(props) {
  const { login, contacts } = props;
  return (
    <div>
      <Router>
        <Navigation />
        {contacts ? (
          <Route exact path="/" component={Dashboard} />
        ) : (
          <Redirect to="/contacts" />
        )}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {!login ? (
            <Redirect to="/signup" />
          ) : (
            <>
              <Route exact path="/service_list" component={ServiceLists} />
              <Route exact path="/contacts" component={ContactspageView} />
            </>
          )}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    login: state.auth.login,
    contacts: localStorage.getItem('contacts')
  };
};

export default connect(mapStateToProps)(App);
