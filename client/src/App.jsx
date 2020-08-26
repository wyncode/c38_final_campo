import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Accommodations from './components/Accommodations';
import Map from './components/Map/Map'
import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <div> 
      <React.Fragment>
        <Map />
      </React.Fragment>

    
    <React.Fragment>
      <Accommodations />
    </React.Fragment>
    </div>
  );
};

export default App;
