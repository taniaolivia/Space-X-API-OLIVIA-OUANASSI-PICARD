import './App.css';
import Launches from './components/Launches';
import Capsules from './components/Capsules';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <a href="/launches"><h1>Launches</h1></a>
              <a href="/capsules"><h1>Capsules</h1></a>
            </div>
          }/>
          <Route path="/launches" element={<Launches/>}/>
          <Route path="/capsules" element={<Capsules/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
