import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

class CampsiteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.match.params.location,
      images: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/v1/${this.state.location}`)
      .then((data) => {
        this.setState({ facilities: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    this.state.facilities.map((item) => {
      axios.get(`http://localhost:8000/api/v1/media/${}`)
      .then((data) => {
      
    })
    })
  }
  render() {
    let card_item = '';

    if (this.state.facilities) {
      card_item = this.state.facilities.map((item) => (
        <a href={`/accommodations/${item.FacilityID}`}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{item.FacilityName}</Card.Title>
            </Card.Body>
          </Card>
        </a>
      ));
    }
    return (
      <Container>
        <Row>{card_item}</Row>
      </Container>
    );
  }
}

export default CampsiteCard;
