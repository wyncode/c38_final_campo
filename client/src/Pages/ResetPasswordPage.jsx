import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [email, setEmail] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    axios
      .get(`/api/password?email=${email}`)
      .then((res) => {
        console.log(res);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1>Reset Password</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Send Email</Button>
        </Form.Group>
        <Link className="mt-2" to="/signin">
          Remember Password? Sign In Here
        </Link>
      </Form>
    </Container>
  );
};

export default ResetPassword;
