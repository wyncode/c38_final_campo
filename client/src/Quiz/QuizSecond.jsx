import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './QuizStyle.css';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

const QuizSecond = () => {
  return (
    <Container className="background">
      <NavigationBar />
      <div id="quizpane">
        <h6>2 of 5</h6>
        <h2>When you peak outside your tent, what do you see?</h2>
        <p>(Choose one option below)</p>
        <div>
          <Button as={Link} id="quizselect" to="/quiz3">
            Mountains
          </Button>
          <Button as={Link} id="quizselect" to="/quiz3">
            Beaches
          </Button>
          <div></div>
          <Button as={Link} id="quizselect" to="/quiz3">
            Desert
          </Button>
          <Button as={Link} id="quizselect" to="/quiz3">
            Canyons
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default QuizSecond;
