import React from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';

const SearchBars = () => {
  return (
    <div>
      <Container className="d-flex flex-row justify-content-around">
        <Form>
          <FormControl type="text" placeholder="Search state, city, or park" />
        </Form>
      </Container>
    </div>
  );
};

export default SearchBars;
