import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ContactspageView from './components/Contacts/ContactsPageView';
import './reset.css';

// import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <ContactspageView />
      </div>
    </Router>
  );
}

export default App;
