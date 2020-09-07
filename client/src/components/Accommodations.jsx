import React from 'react';
import { Carousel, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import NavigationBar from './NavigationBar';
import 'react-dates/lib/css/_datepicker.css';
import '../App.css';
import { Link } from 'react-router-dom';

class Accommodations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      facilityID: this.props.match.params.campsite,
      attributes: [],
      activities: [],
      images: []
    };

    this.collectorImages = this.collectorImages.bind(this);
  }
  async componentDidMount() {
    const response = await fetch(
      `http://localhost:8000/api/v1/accommodations/${this.state.facilityID}`
    );
    const data = await response.json();

    this.setState({
      title: data.Title,
      overview: data.Overview,
      recreation: data.Recreation,
      facilities: data.Facilities,
      natural_features: data.Natural_Features,
      nearby_attractions: data.Nearby_Attractions,
      directions: data.Directions
    });
    data.Attributes.map((item) => {
      this.state.attributes.push(item);
    });
    this.state.activities = data.Activities;
    this.state.images = data.Images;
  }

  async collectorImages() {
    let images;
    if (this.state.images.length) {
      console.log(this.state.images);
      images = await this.state.images.map((item) => (
        <Carousel.Item>
          <Image src={item} />
        </Carousel.Item>
      ));
    }

    return images;
  }
  render() {
    let images = this.collectorImages();
    let amenities;
    let activities;
    console.log(this.state.images);
    if (this.state.images.length > 0) {
      console.log(this.state.images);
      images = this.state.images.map((item) => (
        <Carousel.Item>
          <Image src={item} />
        </Carousel.Item>
      ));
    }
    if (this.state.attributes.length > 0) {
      console.log(this.state.attributes);
      amenities = this.state.attributes.map((item) => <li>{item}</li>);
    }
    if (this.state.activities.length > 0) {
      activities = this.state.activities.map((item) => (
        <div className="detail-campsite-card-outter">
          <div className="detail-activities-card">
            {/* <Image src={require(`../assets/Icons/${item.ActivityName}.svg`)} /> */}

            <Row>
              <h4>{item.ActivityName}</h4>
            </Row>
            <Row>
              <p>{item.RecAreaActivityDescription}</p>
            </Row>
          </div>
        </div>
      ));
    }
    return (
      <Container className="detail-container">
        <NavigationBar />
        <Row className="accommodations-header">
          <Carousel className="carousel-slide">
            {this.state.images.map((item) => (
              <Carousel.Item>
                <Image src={item} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
        <Row>
          <Col xs={8}>
            <Row className="detail-title">
              <Col>
                <Row>
                  <h1>{this.state.title}</h1>
                </Row>
                <Row className="detail-review">
                  <p>
                    97% <span>(145)</span>Reviews{' '}
                    <Image src={require('../assets/Icons/Star_reviews.png')} />
                  </p>
                </Row>
              </Col>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-description">
              <h2>Description</h2>
              <p>{this.state.overview}</p>
              <p>{this.state.facilities}</p>
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
                      <ul>{amenities}</ul>
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
                {activities}
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

                    <Image src={require('../assets/Icons/Star_reviews.png')} />

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
                <Button
                  as={Link}
                  to="/checkout"
                  variant="dark"
                  className="book-button"
                >
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
