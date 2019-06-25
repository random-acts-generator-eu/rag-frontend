import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import './reset.css';

import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <Navigation />
      <Login />
    </div>
  );
}

export default App;
