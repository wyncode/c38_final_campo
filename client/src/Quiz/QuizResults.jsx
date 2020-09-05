import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './QuizResultStyle.css';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';

const QuizResults = () => {
  return (
    <Container className="tentback">
      <NavigationBar />
      <div id="results">
        <h2>The Top 3 National Parks for you!</h2>
        <p>Discover these National Parks for you!</p>
        <div>
          <img src="/images/Arches.png"></img>
          <img src="/images/Arches.png"></img>
          <img src="/images/Arches.png"></img>
        </div>
        <Button as={Link} id="parks" to="/explore">
          Explore all Parks
        </Button>
        <Link id="redo" to="/quiz">
          Retake Quiz
        </Link>
      </div>
    </Container>
  );
};

export default QuizResults;
