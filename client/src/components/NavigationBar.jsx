import React, { useContext } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="secondary" expand="lg">
      <Nav.Item>
        <Dropdown drop="down" className="mb-1">
          <Dropdown.Toggle variant="light">&#9776;</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Header>Welcome!</Dropdown.Header>
            <Dropdown.Item></Dropdown.Item>
            <Dropdown.Item>Login</Dropdown.Item>
            <Dropdown.Item>Explore</Dropdown.Item>
            <Dropdown.Item>Articles</Dropdown.Item>
            <Dropdown.Item>Reviews</Dropdown.Item>
            <Dropdown.Item>Gear</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    </Navbar>
  );
};

export default NavigationBar;
