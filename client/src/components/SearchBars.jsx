import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import data from '../parks-simple.json';
import Date from '../components/Date';

// im going to fix your search bar cuz... this is a REQUIREMENT FOR THE APP TO WORK!
// your welcome :)!
const SearchBars = () => {
  const [searchValue, setSearchValue] = useState('');
  const [submitValue, setSubmitValue] = useState(false);
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

  function onSearchSubmit() {
    setSubmitValue(true);
  }

  return (
    <div>
      {submitValue ? <Redirect to={`/camp-facilities/${searchValue}`} /> : null}
      <Container className="d-flex flex-row pt-2">
        <Form style={{ width: 440 }} onSubmit={onSearchSubmit}>
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
          <Date />
          <Button type="submit" id="buttons">
            <span>Find My Trip</span>
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SearchBars;
