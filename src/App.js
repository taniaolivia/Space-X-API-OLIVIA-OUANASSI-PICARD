import './App.css';
import Launches from './components/Launches';
import Capsules from './components/Capsules';

import React from 'react';

function App() {
  return (
    <div className="App">
      <Launches/>
      <Capsules/>
    </div>
  );
}

export default App;
