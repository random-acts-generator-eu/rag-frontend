import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import './reset.css';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Footer from './components/Footer/footer';
import ServiceLists from './components/ServiceList/ServiceLists';
import Forms from './components/ServiceList/Forms';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/service_list" component={ServiceLists} />
          <Route
            path="/service_list/edit/:id"
            render={props => <Forms {...props} header="Edit" />}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
