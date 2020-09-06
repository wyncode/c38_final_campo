import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './QuizStyle.css';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';
const QuizFourth = () => {
  return (
    <Container className="background">
      <NavigationBar />
      <div id="quizpane">
        <h6>4 of 5</h6>
        <h2>Time to break a sweat! What activity are you gearing up for?</h2>
        <p>(Choose one option below)</p>
        <div>
          <Button as={Link} id="quizselect" to="/quiz5">
            Hiking
          </Button>
          <Button as={Link} id="quizselect" to="/quiz5">
            Winter sports
          </Button>
          <div></div>
          <Button as={Link} id="quizselect" to="/quiz5">
            Water sports
          </Button>
          <Button as={Link} id="quizselect" to="/quiz5">
            Relaxation
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default QuizFourth;
