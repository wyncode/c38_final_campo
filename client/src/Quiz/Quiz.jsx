import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './QuizStyle.css';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

const Quiz = () => {
  return (
    <Container className="background">
      <NavigationBar />
      <div id="quizpane">
        <h6>1 of 5</h6>
        <h2>You're planning your next camping trip, who's coming with?</h2>
        <p>(Choose one option below)</p>
        <div>
          <Button as={Link} id="quizselect" to="/quiz2">
            My best pals
          </Button>
          <Button as={Link} id="quizselect" to="/quiz2">
            I'm going solo
          </Button>
          <div></div>
          <Button as={Link} id="quizselect" to="/quiz2">
            My family
          </Button>
          <Button as={Link} id="quizselect" to="/quiz2">
            My pets
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Quiz;
