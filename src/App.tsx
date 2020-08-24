import React from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from "./components/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Clock date={new Date()} />

      </header>
    </div>
  );
}

export default App;
