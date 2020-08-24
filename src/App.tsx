import React from 'react';
import './App.css';

import Rule from "./components/Rule";

import Clock from "./components/Clock";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*  Edit <code>src/App.tsx</code> and save to reload.*/}
                {/*</p>*/}

                <Clock date={new Date()}/>

                <Rule color="blue" />


            </header>
        </div>
    );
}

export default App;
