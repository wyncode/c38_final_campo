import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Accommodations from './components/Accommodations';

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
    // <AppContextProvider>
    //   <div id="demo">
    //     <h3>Hello from client/src/App.js</h3>
    //     <ContextDemo />
    //     <h3>{serverMessage}</h3>
    //   </div>
    // </AppContextProvider>
    <React.Fragment>
      <Accommodations />
    </React.Fragment>
  );
};

export default App;
