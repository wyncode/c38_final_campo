import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import NavigationBar from '../components/NavigationBar';

const SignUp = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/users/', formData)
      .then((response) => {
        sessionStorage.setItem('user', response.data);
        setCurrentUser(response.data);
        history.push('/');
      })
      .catch((error) => swal('Error', 'Please check the inputs', 'warning'));
  };

  return (
    <div id="body">
      <NavigationBar />
      <Container id="signup">
        <h1>Welcome to Campo</h1>
        <Form style={{ width: 300 }} onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="fullName">Full Name</Form.Label>
            <Form.Control
              id="fullName"
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              id="email"
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button id="buttons" type="submit">
              Create Account
            </Button>
          </Form.Group>
        </Form>
        <Link id="fontstyle" className="mt-4" to="/Signin">
          Already have an account? Login.
        </Link>
      </Container>
    </div>
  );
};

export default SignUp;
