import React, { useContext } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="d-flex justify-content-between color"
    >
      <Nav.Item>
        <Dropdown drop="down">
          <Dropdown.Toggle variant="outline-light">&#9776;</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.ItemText>Welcome!</Dropdown.ItemText>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to="/">
              Home
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/explore">
              Explore
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/quiz">
              Quiz
            </Dropdown.Item>
            <Dropdown.Item>Articles</Dropdown.Item>
            <Dropdown.Item>Reviews</Dropdown.Item>
            <Dropdown.Item>Gear</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>My Profile</Dropdown.Item>
            <Dropdown.Item>My Getaways</Dropdown.Item>
            <Dropdown.Item as={Link} to="/signin">
              Login
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/signup">
              Sign Up
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
      <Nav.Item as={Link} to="/">
        <img src="/images/CampoLogo.png" height="50" width="160"></img>
      </Nav.Item>

      <Nav.Item>
        <svg
          width="2em"
          height="1.5em"
          viewBox="0 0 16 16"
          class="bi bi-search"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          margin-bottom=".5em"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
          />
        </svg>
      </Nav.Item>
    </Navbar>
  );
};

export default NavigationBar;
