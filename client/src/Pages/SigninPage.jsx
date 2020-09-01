import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const LoginPage = () => {
  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <div id="body">
      <NavigationBar />
      <Container id="signin">
        <h1>Welcome to Campo</h1>
        <Form style={{ width: 300 }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button id="buttons" type="submit">
              <span>Sign In</span>
            </Button>
          </Form.Group>
        </Form>
        <Link id="fontstyle" className="mt-2" to="/reset-password">
          Forgot Password?
        </Link>
        <Link id="fontstyle" className="mt-2" to="/signup">
          Create an Account
        </Link>
      </Container>
    </div>
  );
};

export default LoginPage;
