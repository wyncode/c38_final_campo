import React from 'react';
import { Container, FormControl, Form, Col, Button } from 'react-bootstrap';
import SearchBars from '../components/SearchBars';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';
import Date from '../components/Date';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  return (
    <div id="body">
      <NavigationBar />
      <Container className="container">
        <div id="Searchblock">
          <h1>Wherever the campfire takes you.</h1>
          <h6>
            Discover America’s National Parks to unplug and enjoy a night under
            the stars.
          </h6>
          <SearchBars />
          <Date />
          <Button as={Link} to="/accommodations" id="buttons">
            <span>Find My Trip</span>
          </Button>
        </div>
        <div id="quizblock">
          <h1>Need help finding an adventure?</h1>
          <h6>We can narrow it down to fit your needs.</h6>
          <Button id="buttons" type="submit" as={Link} to="/quiz">
            <span>Take Our Quiz</span>
          </Button>
        </div>
        <div id="howitworks">
          <h1>How It Works</h1>
          <img src="/images/Step1.png"></img>
          <h4>Step 1</h4>
          <p>Choose your getaway</p>
          <p>Pick a park & set the date</p>
          <img src="/images/Step2.png"></img>
          <h4>Step 2</h4>
          <p>Browse fun activities</p>
          <p>See our recommended activities for your campsite</p>
          <img src="/images/Step3.png"></img>
          <h4>Step 3</h4>
          <p>Embrace the outdoors</p>
          <p>Unplug, relax, and enjoy</p>
        </div>
        <div id="articles">
          <h3>Need more inspiration?</h3>
          <h4>Check these out.</h4>

          <Carousel
            className="d-flex"
            indicators={false}
            fade={true}
            interval={2000}
            slide={false}
          >
            <Carousel.Item>
              <img
                className="d-flex"
                src="/images/TravlersTales.png"
                alt="First slide"
                height="223"
                width="215"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex"
                src="/images/CReads.png"
                alt="Second slide"
                height="223"
                width="215"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-flex"
                src="/images/Gear.png"
                alt="Third slide"
                height="223"
                width="215"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Home;
