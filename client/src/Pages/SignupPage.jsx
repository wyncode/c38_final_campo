import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1>Create New Account</h1>
      <Form style={{ width: 300 }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Full Name"
            onChange={handleChange}
          />
        </Form.Group>
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
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Create Account</Button>
        </Form.Group>
      </Form>
      <Link className="mt-2" to="/signin">
        Already Have an Account? Sign In Here
      </Link>
    </Container>
  );
};

export default SignupPage;
