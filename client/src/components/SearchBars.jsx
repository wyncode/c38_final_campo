import React from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';

const SearchBars = () => {
  return (
    <div>
      <Container className="d-flex flex-row pt-2">
        <Form style={{ width: 440 }}>
          <FormControl
            type="text"
            placeholder="Search by state, city, or park"
          />
        </Form>
      </Container>
    </div>
  );
};

export default SearchBars;
