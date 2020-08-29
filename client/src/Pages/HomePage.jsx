import React from 'react';
import {
  Carousel,
  Container,
  FormControl,
  Form,
  Col,
  Button
} from 'react-bootstrap';
import SearchBars from '../components/SearchBars';
import NavigationBar from '../components/NavigationBar';
import { Link } from 'react-router-dom';
import Map from '../components/Map/Map';
import Date from '../components/Date';

const Home = () => {
  return (
    <div>
      <NavigationBar />
      {/* <Map /> */}
      <Container className="d-flex flex-column justify-content align-items-center mt-5 bg-white">
        <h1>Wherever the campfire takes you.</h1>
        <h6>
          Discover America’s National Parks to unplug and enjoy a night under
          the stars.
        </h6>
        <SearchBars />
        <Date />
        <Button>Find My Trip</Button>
        <div className="bg-secondary d-flex flex-column justify-content align-items-center mt-5 p-3 text-white">
          <h1>Need help finding an adventure?</h1>
          <h6>We can narrow it down to fit your needs.</h6>
          <Button type="submit" as={Link} to="/quiz">
            Take Our Quiz
          </Button>
        </div>
        <h1>How It Works</h1>
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
        <h4>Step 1</h4>
        <p>Choose your getaway</p>
        <p>Pick a park & set the date</p>
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-sun"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3.5 8a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z" />
          <path
            fill-rule="evenodd"
            d="M8.202.28a.25.25 0 0 0-.404 0l-.91 1.255a.25.25 0 0 1-.334.067L5.232.79a.25.25 0 0 0-.374.155l-.36 1.508a.25.25 0 0 1-.282.19l-1.532-.245a.25.25 0 0 0-.286.286l.244 1.532a.25.25 0 0 1-.189.282l-1.509.36a.25.25 0 0 0-.154.374l.812 1.322a.25.25 0 0 1-.067.333l-1.256.91a.25.25 0 0 0 0 .405l1.256.91a.25.25 0 0 1 .067.334L.79 10.768a.25.25 0 0 0 .154.374l1.51.36a.25.25 0 0 1 .188.282l-.244 1.532a.25.25 0 0 0 .286.286l1.532-.244a.25.25 0 0 1 .282.189l.36 1.508a.25.25 0 0 0 .374.155l1.322-.812a.25.25 0 0 1 .333.067l.91 1.256a.25.25 0 0 0 .405 0l.91-1.256a.25.25 0 0 1 .334-.067l1.322.812a.25.25 0 0 0 .374-.155l.36-1.508a.25.25 0 0 1 .282-.19l1.532.245a.25.25 0 0 0 .286-.286l-.244-1.532a.25.25 0 0 1 .189-.282l1.508-.36a.25.25 0 0 0 .155-.374l-.812-1.322a.25.25 0 0 1 .067-.333l1.256-.91a.25.25 0 0 0 0-.405l-1.256-.91a.25.25 0 0 1-.067-.334l.812-1.322a.25.25 0 0 0-.155-.374l-1.508-.36a.25.25 0 0 1-.19-.282l.245-1.532a.25.25 0 0 0-.286-.286l-1.532.244a.25.25 0 0 1-.282-.189l-.36-1.508a.25.25 0 0 0-.374-.155l-1.322.812a.25.25 0 0 1-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11z"
          />
        </svg>
        <h4>Step 2</h4>
        <p>Browse fun activities</p>
        <p>See our recommended activities for your campsite</p>
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-tree"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 0a.5.5 0 0 1 .416.223l3 4.5A.5.5 0 0 1 11 5.5h-.098l2.022 3.235a.5.5 0 0 1-.424.765h-.191l1.638 3.276a.5.5 0 0 1-.447.724h-11a.5.5 0 0 1-.447-.724L3.69 9.5H3.5a.5.5 0 0 1-.424-.765L5.098 5.5H5a.5.5 0 0 1-.416-.777l3-4.5A.5.5 0 0 1 8 0zM5.934 4.5H6a.5.5 0 0 1 .424.765L4.402 8.5H4.5a.5.5 0 0 1 .447.724L3.31 12.5h9.382l-1.638-3.276A.5.5 0 0 1 11.5 8.5h.098L9.576 5.265A.5.5 0 0 1 10 4.5h.066L8 1.401 5.934 4.5z"
          />
          <path d="M7 13h2v3H7v-3z" />
        </svg>
        <h4>Step 3</h4>
        <p>Embrace the outdoors</p>
        <p>Unplug, relax, and enjoy</p>
        <div className="d-flex flex-column justify-content align-items-center mt-3 p-3 text-dark">
          <h4>Browse these articles for some inspiration and information:</h4>
        </div>
        <Carousel className="d-block w-50">
          <Carousel.Item>
            <img
              className="d-block"
              src="https://images.unsplash.com/photo-1553570739-330b8db8a925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60xt=Second.js/200x200?text=First slide&bg=373940"
              alt="First slide"
              height="400"
              width="600"
            />
            <Carousel.Caption>
              <h3>Ocean</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://images.unsplash.com/photo-1549619856-ac562a3ed1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.js/200x200"
              alt="Third slide"
              height="400"
              width="600"
            />

            <Carousel.Caption>
              <h3>Wildlife</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.js/200x200?text=Third slide&bg=20232a"
              alt="Third slide"
              height="400"
              width="600"
            />

            <Carousel.Caption>
              <h3>Trees</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <p></p>
      <div className="d-flex flex-column justify-content align-items-center mt-3 p-3 text-dark">
        {' '}
        <h6>
          <em>"It's not what you look at that matters, it's what you see."</em>
        </h6>
        <h6>-Henry Thoreau</h6>
      </div>
    </div>
  );
};

export default Home;
