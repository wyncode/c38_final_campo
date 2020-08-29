import React, { useState } from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import styled, {css} from 'styled-components';
import '../App.css';

function Accommodations() {
  return (
    <Container className="body">
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
        </Col>

        <Col>
          <h3>$76/night</h3>  
    <button class="btn btn-lg btn-block btn-dark btn-flashy" data-submit-booking="" type="button"> Book Now </button>
        </Col>
      </Row>
    </Container>
  );
}


export default Accommodations;
