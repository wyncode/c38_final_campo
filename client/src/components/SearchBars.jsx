import React from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';

const SearchBars = () => {
  return (
    <div>
      <Container className="d-flex flex-row justify-content-around">
        <Form>
          <FormControl
            type="text"
            placeholder="Search by state, city, or park"
          />
        </Form>

        <Form>
          <FormControl
            id="searchbar"
            type="date"
            placeholder="Search..."
            // onChange={(e) => setSearchTerm(e.target.value)}
            // onChange={changeSearch}
          />
        </Form>
        <Form>
          <FormControl
            id="searchbar"
            type="date"
            placeholder="Search..."

            // onChange={(e) => setSearchTerm(e.target.value)}
            // onChange={changeSearch}
          />
        </Form>
      </Container>
    </div>
  );
};

export default SearchBars;
