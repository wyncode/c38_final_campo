import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './QuizStyle.css';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';
const QuizFifth = () => {
  return (
    <Container className="background">
      <NavigationBar />
      <div id="quizpane">
        <h6>5 of 5</h6>
        <h2>Your favorite season for camping is...</h2>
        <p>(Choose one option below)</p>
        <div>
          <Button as={Link} id="quizselect" to="/quizresults">
            Summer
          </Button>
          <Button as={Link} id="quizselect" to="/quizresults">
            Fall
          </Button>
          <div></div>
          <Button as={Link} id="quizselect" to="/quizresults">
            Spring
          </Button>
          <Button as={Link} id="quizselect" to="/quizresults">
            Winter
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default QuizFifth;
