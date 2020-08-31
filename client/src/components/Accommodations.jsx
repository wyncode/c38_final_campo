import React, { useState } from 'react';
import { Carousel, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../App.css';
import axios from 'axios';

class Accommodations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: null,
      endDate:null,
      facilityID: 'test'
    }
  }
  componentDidMount(){
    axios.get(`/api/accommodations/${this.state.facilityID}`)
    .then((data) =>{
      this.setState({title: data.data.Title})
      this.setState({overview: data.data.Overview})
      this.setState({recreation: data.data.Recreation})
      this.setState({facilities: data.data.Facilities})
      this.setState({natural_features: data.data.Natural_Features})
      this.setState({nearby_attractions: data.data.Nearby_Attractions})
      this.setState({directions: data.data.Directions})
      this.setState({attributes: data.data.Attributes})
      this.setState({activites: data.data.Activities})
      this.setState({images: data.data.Images})
    })
    .catch((error) => {console.log(error)})
  }
  render(){
    let images;
    let amenities;
    if (this.state.images){
      images = this.state.images.map(item =>(
        <Carousel.Item>
          <Image
            src={item}
          />
        </Carousel.Item>));
    }
    if (this.state.attributes){
      amenities = this.state.attributes.map(item =>(
        <li>{item}</li>
      ));
    }

    return (
      <Container className="detail-container">
        <Row className="accommodations-header">
          <Carousel className="carousel-slide">
            {images}
          </Carousel>
        </Row>
        <Row>
          <Col xs={8}>
            <Row className="detail-title">
                <Col>
                  <Row><h1>{this.state.title}</h1></Row>
                  <Row className="detail-review">
                    <p>97%{' '}<span>(145)</span>Reviews ⭐️⭐️⭐️⭐️⭐️</p>
                  </Row>
                </Col>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-description">
              <p>{this.state.overview}</p>
              <p>{this.state.facilities}</p>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-campsite">
              <Col>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row><h3>Amenities</h3></Row> 
                    <Row>
                      <ul>
                        {amenities}
                      </ul>
                    </Row>
                  </div>
                </div>
                
              </Col>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-activities">
              <Col>
                <Row><h2>Activities</h2></Row>
                <Row><h3>Offered near campground</h3></Row>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row><h4>Biking</h4></Row>
                    <Row>
                      <p>Biking trails are available in this area. Bring your own mountain bike or rent one from our rental locations. </p>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col className="detail-booking">
            <div className="detail-booking-card">
              <Row className="detail-booking-card-price"><h3>$76/night</h3></Row>
              <Row>
                <DateRangePicker 
                  startDate={this.state.startDate}
                  startDateId="your_unique_start_date_id"
                  endDate={this.state.endDate}
                  endDateId="your_unique_end_date_id"
                  onDatesChange={({ startDate, endDate }) => this.setState({startDate, endDate})}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({focusedInput})}
                />
              </Row>
              <Row>
                <Button className="book-button-monkey"> Book Now </Button>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}


export default Accommodations;
