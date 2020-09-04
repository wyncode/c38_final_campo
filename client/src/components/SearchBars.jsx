import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, FormControl } from 'react-bootstrap';
import data from '../parks-simple.json';

const SearchBars = () => {
  const [searchValue, setSearchValue] = useState('');
  const [inputValue, setInputValue] = useState(null);

  function searchHandle(e) {
    e.preventDefault();
    setSearchValue(e.target.value);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setInputValue(filtered);
    return inputValue;
  }

  return (
    <div>
      <Container className="d-flex flex-row pt-2">
        <Form style={{ width: 440 }}>
          <FormControl
            value={inputValue && inputValue.name}
            type="text"
            placeholder="Search by state, city, or park"
            onChange={(e) => searchHandle(e)}
          />
          <div style={{ height: `100px`, overflow: `scroll` }}>
            {inputValue &&
              inputValue.map((item) => (
                <p
                  style={{
                    backgroundColor: `white`,
                    width: `500px`,
                    color: `black`,
                    height: `30px`,
                    margin: `0`
                  }}
                >
                  {item.name}
                </p>
              ))}
            <div></div>
          </div>
        </Form>

        {/* {inputValue &&
          inputValue.map((item) => (
            <div>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
            </div>
          ))} */}
      </Container>
    </div>
  );
};

export default SearchBars;
