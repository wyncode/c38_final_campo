import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Accommodations from './components/Accommodations';

import Map from './components/Map/Map'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SigninPage from './Pages/SigninPage';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';


import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/reset-password" component={ResetPasswordPage} />
        <Route exact path="/accomodations" component={Accommodations} />
      </Switch>
    </Router>
    // <AppContextProvider>
    //   <div id="demo">
    //     <h3>Hello from client/src/App.js</h3>
    //     <ContextDemo />
    //     <h3>{serverMessage}</h3>
    //   </div>
    // </AppContextProvider>

  );
};

export default App;
