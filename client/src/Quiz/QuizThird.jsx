import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './QuizStyle.css';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

const QuizThird = () => {
  return (
    <Container className="background">
      <NavigationBar />
      <div id="quizpane">
        <h6>3 of 5</h6>
        <h2>You look great with that reusable bottle, what's inside?</h2>
        <p>(Choose one option below)</p>
        <div>
          <Button as={Link} id="quizselect" to="/quiz4">
            Water
          </Button>
          <Button as={Link} id="quizselect" to="/quiz4">
            Sports drink
          </Button>
          <div></div>
          <Button as={Link} id="quizselect" to="/quiz4">
            Coffee
          </Button>
          <Button as={Link} id="quizselect" to="/quiz4">
            Alcohol
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default QuizThird;
