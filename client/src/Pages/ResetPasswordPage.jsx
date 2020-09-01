import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

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
    <div>
      <NavigationBar />
      <Container id="reset-password">
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
            <Button id="buttons" type="submit">
              <span>Send Email</span>
            </Button>
          </Form.Group>
          <Link id="fontstyle" className="mt-2" to="/signin">
            Remember Password? Sign In Here
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default ResetPassword;
