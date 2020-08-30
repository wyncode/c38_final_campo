import React, { useState } from 'react';
import { Carousel, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../App.css';

function Accommodations() {
  const [dates, setDates] = useState({startDate: null, endDate: null, focusedInput:null});

  return (
    <Container className="detail-container">
      <Row className="accommodations-header">
        <Carousel className="carousel-slide">
          <Carousel.Item>
            <Image
              src={require("../assets/images/inside-tent.jpeg")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../assets/images/inside-tent.jpeg")}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../assets/images/inside-tent.jpeg")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row>
        <Col>
          <Row className="detail-title">
              <Col>
                <Row><h1>Mandala Cabin</h1></Row>
                <Row className="detail-review">
                  <p>97%{' '}<span>(145)</span>Reviews ⭐️⭐️⭐️⭐️⭐️</p>
                </Row>
              </Col>
          </Row>
          <Row className="detail-title-bar"></Row>
          <Row>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Row>
          <Row className="detail-campsite">
            <Col>
              <Row>
                <h3>Campsite Area</h3>
                
                <Col>
               
                  <ul>
                  <li>ADA access</li>
                  <li>Parking at listing</li>
                  <li>Walk to listing</li>
                  </ul>
                </Col>
                </Row>
                
              <Row>
                <h3>Essentials</h3>
                <ul>
                  <li>Campfires allowed</li>
                  <li>Toilet available</li>
                  <li>No pets</li>
                </ul>
              </Row>
              <Row>
                <h3>Amenties</h3>
                <ul>
                  <li>Picnic table available</li>
                  <li>Portable water available</li>
                  <li>No hot showers</li>
                </ul>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col className="detail-booking">
          <Row>
            <h3>$76/night</h3>  
          </Row>
          <Row>
            
            <DateRangePicker 
              startDate={dates.startDate}
              startDateId="your_unique_start_date_id"
              endDate={dates.endDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) => setDates({startDate, endDate})}
              focusedInput={dates.focusedInput}
              onFocusChange={focusedInput => setDates({focusedInput})}
            />

          </Row>
          <Row>
            <Button className="book-button-monkey"> Book Now </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Accommodations;
