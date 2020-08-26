import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar fixed="top" style={{ height: '300px' }}>
      <Navbar.Brand href="/">
        <img
          id="logo"
          src=""
          // style={imagecss}
          alt="logo"
        />
      </Navbar.Brand>
      <Form>
        <FormControl
          id="searchbar"
          type="text"
          placeholder="Search..."
          // onChange={(e) => setSearchTerm(e.target.value)}
          // onChange={changeSearch}
        />
      </Form>
      <Form>
        <FormControl
          id="searchbar"
          type="text"
          placeholder="Search..."
          // onChange={(e) => setSearchTerm(e.target.value)}
          // onChange={changeSearch}
        />
      </Form>
      <Form>
        <FormControl
          id="searchbar"
          type="text"
          placeholder="Search..."
          // onChange={(e) => setSearchTerm(e.target.value)}
          // onChange={changeSearch}
        />
      </Form>
    </Navbar>
  );
};

export default Navigation;
