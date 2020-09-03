import React, { useState } from 'react';
import { Carousel, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../App.css';
import NavigationBar from './NavigationBar';
import axios from 'axios';
import starReview from '../assets/Icons/Star_reviews.png';

class Accommodations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      facilityID: 'test'
    };
  }

  render() {
    return (
      <Container className="detail-container">
        <NavigationBar />
        <Row className="accommodations-header">
          <Carousel className="carousel-slide">
            <Carousel.Item>
              <Image src="/images/Fireside.png" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Col xs={8}>
            <Row className="detail-title">
              <Col>
                <Row>
                  <h1>Pinecrest Group Campground</h1>
                </Row>
                <Row className="detail-review">
                  <p>
                    97% <span>(145)</span>Reviews{' '}
                    <>
                      <Image src={starReview} />
                    </>
                  </p>
                </Row>
              </Col>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-description">
              <h2>Description</h2>
              <p>
                Pinecrest Campground offers four group campsites that provide a
                nice, quiet and relaxing atmosphere. This is a wonderful
                location for a group to start their south Florida adventure.
              </p>
              <p>
                This campground is for primitive group use camping only. Picnic
                tables and fire rings are available at each site. There are no
                covered picnic areas, toilets, hookups, or water. Minimal shade
                is provided by surrounding trees.
              </p>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-campsite">
              <Col>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row>
                      <h3>Campsite Area</h3>
                    </Row>
                    <Row>
                      <ul>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_guests_122299.svg')}
                          />{' '}
                          Group Standard Area
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_RV_3241806.svg')}
                          />{' '}
                          Overnight
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_Electricity_2169306.svg')}
                          />{' '}
                          Nonelectric
                        </li>
                      </ul>
                    </Row>
                  </div>
                </div>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row>
                      <h3>Essentials</h3>
                    </Row>
                    <Row>
                      <ul>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_cabin_3358008.svg')}
                          />{' '}
                          No covered picnic areas
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_Toilet_3130377.svg')}
                          />{' '}
                          No toilets
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_sewage_pipe_2203299.svg')}
                          />{' '}
                          No hookups
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_Water_3495628.svg')}
                          />{' '}
                          No water
                        </li>
                      </ul>
                    </Row>
                  </div>
                </div>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row>
                      <h3>Amenities</h3>
                    </Row>
                    <Row>
                      <ul>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_reed_3117167.svg')}
                          />{' '}
                          Tables
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_Campfire_1391536.svg')}
                          />{' '}
                          Fire Pit
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_Picnic_Table_744567.svg')}
                          />{' '}
                          Picnic Table
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_jacuzzi_3347734.svg')}
                          />{' '}
                          Vault Toilets
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_Accessibility_1273315.svg')}
                          />{' '}
                          Accessibility
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_forest_2875962.svg')}
                          />{' '}
                          Quiet Area
                        </li>
                        <li>
                          <Image
                            src={require('../assets/Icons/noun_Spatula_1976953.svg')}
                          />{' '}
                          Grills/Fire Ring
                        </li>
                      </ul>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-activities">
              <Col>
                <Row>
                  <h2>Activities</h2>
                </Row>
                <Row>
                  <h3>Offered near campground</h3>
                </Row>
                <div className="detail-campsite-card-outter">
                  <div className="detail-activities-card">
                    <Image
                      src={require('../assets/Icons/noun_Bike_2279318.svg')}
                    />
                    <Row>
                      <h4>Biking</h4>
                    </Row>
                    <Row>
                      <p>
                        Biking trails are available in this area. Bring your own
                        mountain bike or rent one from our rental locations.
                      </p>
                    </Row>
                  </div>
                </div>
                <div className="detail-campsite-card-outter">
                  <div className="detail-activities-card">
                    <Image
                      src={require('../assets/Icons/noun_Hiking_3402699.svg')}
                    />
                    <Row>
                      <h4>Hiking</h4>
                    </Row>
                    <Row>
                      <p>
                        There are many interesting hiking trails in the
                        surrounding area. Sovereign Trails is a popular one to
                        try.{' '}
                      </p>
                    </Row>
                  </div>
                </div>
                <div className="detail-campsite-card-outter">
                  <div className="detail-activities-card">
                    <Image
                      src={require('../assets/Icons/noun_Fishing_1750119.svg')}
                    />
                    <Row>
                      <h4>Fishing</h4>
                    </Row>
                    <Row>
                      <p>
                        Fishing near the Clextonia River is a fun pastime to do
                        during a lazy afternoon. We have rods for rent and bait
                        for purchase.
                      </p>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row>
              <Col>
                <Row>
                  <h2>Reviews</h2>
                </Row>
                <Row>
                  <h3>Offered near campground</h3>
                </Row>
                <div className="detail-campsite-card-outter">
                  <div className="detail-review-card">
                    <Row>
                      <h4>Taylor</h4>
                    </Row>

                    <>
                      <Image src={starReview} />
                    </>
                    <Row>
                      <h5>Amazing Experience!</h5>
                    </Row>
                    <Row>
                      <p>
                        Had such a great time here. Mandala Cabin is for sure
                        the best place in Arches National Park. Will be back
                        next year.
                      </p>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col className="detail-booking">
            <div className="detail-booking-card">
              <Row className="detail-booking-card-price">
                <h3>$76/night</h3>
              </Row>
              <Row>
                <DateRangePicker
                  startDate={this.state.startDate}
                  startDateId="your_unique_start_date_id"
                  endDate={this.state.endDate}
                  endDateId="your_unique_end_date_id"
                  onDatesChange={({ startDate, endDate }) =>
                    this.setState({ startDate, endDate })
                  }
                  focusedInput={this.state.focusedInput}
                  onFocusChange={(focusedInput) =>
                    this.setState({ focusedInput })
                  }
                />
              </Row>
              <Row>
                <Button variant="dark" className="book-button">
                  {' '}
                  Book Now{' '}
                </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Accommodations;
