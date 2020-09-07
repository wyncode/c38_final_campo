import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Accommodations from './components/Accommodations';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SigninPage from './Pages/SigninPage';
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import StripePay from './Pages/StripePay';
import Quiz from './Quiz/Quiz';
import QuizSecond from './Quiz/QuizSecond';
import QuizThird from './Quiz/QuizThird';
import QuizFourth from './Quiz/QuizFourth';
import QuizFifth from './Quiz/QuizFifth';
import QuizResults from './Quiz/QuizResults';
import ExplorePage from './Pages/ExplorePage';
import Profile from './Pages/ProfilePage';

import './App.css';

const App = () => {


  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signin" component={SigninPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/reset-password" component={ResetPasswordPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/checkout" component={StripePay} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/quiz2" component={QuizSecond} />
          <Route exact path="/quiz3" component={QuizThird} />
          <Route exact path="/quiz4" component={QuizFourth} />
          <Route exact path="/quiz5" component={QuizFifth} />
          <Route exact path="/quizresults" component={QuizResults} />
          <Route exact path="/explore" component={ExplorePage} />
          <Route exact path="/accommodations" component={Accommodations} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
};

export default App;
