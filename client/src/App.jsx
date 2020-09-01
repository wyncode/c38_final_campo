import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Accommodations from './components/Accommodations';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SigninPage from './Pages/SigninPage';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import StripePay from './Pages/StripePay';
import Quiz from './components/Quiz';
import ExplorePage from './Pages/ExplorePage';

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
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/reset-password" component={ResetPasswordPage} />
          <Route exact path="/accomodations" component={Accommodations} />
          <Route exact path="/checkout" component={StripePay} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/explore" component={ExplorePage} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
