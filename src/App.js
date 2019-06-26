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
import './reset.css';

import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/footer';
import ServiceLists from './components/ServiceList/ServiceLists';

function App(props) {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {!props.login ? (
            <Redirect to="/signup" />
          ) : (
            <>
              <Route exact path="/service_list" component={ServiceLists} />
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
    login: state.auth.login
  };
};

export default connect(mapStateToProps)(App);
