import React, { useState } from 'react';
import { Carousel, Button, Container, Row, Col, Image } from 'react-bootstrap';
import 'react-dates/initialize';
import { DateRangePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import '../App.css';
import NavigationBar from './NavigationBar';
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
  // connection to the api from recreation that which andrew thinks is a pointless endeavour 
  // but this is what happens when you're a women in tech
  // componentDidMount(){
  //   axios.get(`/api/accommodations/${this.state.facilityID}`)
  //   .then((data) =>{
  //     this.setState({title: data.data.Title})
  //     this.setState({overview: data.data.Overview})
  //     this.setState({recreation: data.data.Recreation})
  //     this.setState({facilities: data.data.Facilities})
  //     this.setState({natural_features: data.data.Natural_Features})
  //     this.setState({nearby_attractions: data.data.Nearby_Attractions})
  //     this.setState({directions: data.data.Directions})
  //     this.setState({attributes: data.data.Attributes})
  //     this.setState({activites: data.data.Activities})
  //     this.setState({images: data.data.Images})
  //   })
  //   .catch((error) => {console.log(error)})
  // }
  render(){
    // let images;
    // let amenities;
    // if (this.state.images){
    //   images = this.state.images.map(item =>(
        // <Carousel.Item>
        //   <Image
        //     src={item}
        //   />
        // </Carousel.Item>));
    // }
    // if (this.state.attributes){
    //   amenities = this.state.attributes.map(item =>(
    //     <li>{item}</li>
    //   ));
    // }

    return (
      <Container className="detail-container">
        <NavigationBar />
        <Row className="accommodations-header">
          <Carousel className="carousel-slide">
            <Carousel.Item>
              <Image
                src='/images/Fireside.png'
              />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Col xs={8}>
            <Row className="detail-title">
                <Col>
                  <Row><h1>Pinecrest Group Campground</h1></Row>
                  <Row className="detail-review">
                    <p>97%{' '}<span>(145)</span>Reviews ⭐️⭐️⭐️⭐️⭐️</p>
                  </Row>
                </Col>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-description">
              <h2>Description</h2>
              <p>Pinecrest Campground offers four group campsites that provide a nice, quiet and relaxing atmosphere. This is a wonderful location for a group to start their south Florida adventure.</p>
              <p>This campground is for primitive group use camping only. Picnic tables and fire rings are available at each site. There are no covered picnic areas, toilets, hookups, or water. Minimal shade is provided by surrounding trees.</p>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row className="detail-campsite">
              <Col>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row><h3>Campsite Area</h3><Image src={require('../assets/Icons/Cabin Icon.png')}/></Row> 
                    <Row>
                      <ul>
                        <li>Group Standard Area</li>
                        <li>Overnight</li>
                        <li>Nonelectric</li>
                      </ul>
                    </Row>
                  </div>
                </div>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row><h3>Essentials</h3></Row> 
                    <Row>
                      <ul>
                        <li>No covered picnic areas</li>
                        <li>No toilets</li>
                        <li>No hookups</li>
                        <li>No water</li>
                      </ul>
                    </Row>
                  </div>
                </div>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row><h3>Amenities</h3></Row> 
                    <Row>
                      <ul>
                        <li>Tables</li>
                        <li>Fire Pit</li>
                        <li>Picnic Table</li>
                        <li>Vault Toilets</li>
                        <li>Accessibility</li>
                        <li>Quiet Area</li>
                        <li>Grills/Fire Ring</li>
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
                      <p>Biking trails are available in this area. Bring your own mountain bike or rent one from our rental locations.</p>
                    </Row>
                  </div>
                </div>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row><h4>Hiking</h4></Row>
                    <Row>
                      <p>There are many interesting hiking trails in the surrounding area. Sovereign Trails is a popular one to try.  </p>
                    </Row>
                  </div>
                </div>
                <div className="detail-campsite-card-outter">
                  <div className="detail-campsite-card">
                    <Row><h4>Fishing</h4></Row>
                    <Row>
                      <p>Fishing near the Clextonia River is a fun pastime to do during a lazy afternoon. We have rods for rent and bait for purchase.</p>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="detail-title-bar"></Row>
            <Row>
              <Col>
                <Row><h2>Reviews</h2></Row>
                <Row><h3>Offered near campground</h3></Row>
                <div className="detail-campsite-card-outter">
                  <div className="detail-review-card">
                    <Row><h4>Taylor</h4></Row>
                    <Row><h5>Amazing Experience!</h5></Row>
                    <Row>
                      <p>Had such a great time here. Mandala Cabin is for sure the best place in Arches National Park. Will be back next year.</p>
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
