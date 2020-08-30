import React from 'react';
import { FormControl, Form, FormLabel, FormGroup } from 'react-bootstrap';

const Date = () => {
  return (
    <div id="date">
      <div id="dateleft">
        <FormGroup>
          <FormLabel htmlFor="fromdate">From: </FormLabel>
          <FormControl id="fromdate" type="date" />
        </FormGroup>
      </div>
      <div id="dateright">
        <FormGroup>
          <FormLabel htmlFor="todate">To: </FormLabel>
          <FormControl id="searchbar" type="date" placeholder="Search..." />
        </FormGroup>
      </div>
    </div>
  );
};

export default Date;
