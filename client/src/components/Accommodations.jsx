import React, { useState } from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';

function Accommodations() {
  return (
    <Container>
      <Row className="accommodations-header">
        <Carousel className="carousel-slide">
          <Carousel.Item>
            <img
              className="d-block"
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Col>
          <Row>
            <h1>Mandala Cabin</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>97% - 145 Reviews </div>
            <div className="stars">⭐️⭐️⭐️⭐️⭐️</div>
          </Row>
          <Row><p>Amenities</p></Row>
          <Row><p>Reviews</p></Row>
        </Col>
        <Col>
          <h3>$100</h3>
          <p>per night</p>
          <Button variant="link">Check in</Button>
          <Button variant="link">Check out</Button>
          <Button variant="link">Guests</Button>
          <Button><strong> Book Now </strong> </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Accommodations;
