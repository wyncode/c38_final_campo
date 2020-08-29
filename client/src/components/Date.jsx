import React from 'react';
import { FormControl, Form } from 'react-bootstrap';

const Date = () => {
  return (
    <div id="date">
      <div id="dateleft">
        <Form>
          <FormControl
            id="searchbar"
            type="date"
            placeholder="Search..."
            // onChange={(e) => setSearchTerm(e.target.value)}
            // onChange={changeSearch}
          />
        </Form>
      </div>
      <div id="dateright">
        <Form>
          <FormControl
            id="searchbar"
            type="date"
            placeholder="Search..."
            // onChange={(e) => setSearchTerm(e.target.value)}
            // onChange={changeSearch}
          />
        </Form>
      </div>
    </div>
  );
};

export default Date;
