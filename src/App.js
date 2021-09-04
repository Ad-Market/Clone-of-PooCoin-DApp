import React from 'react';
import './App.css';
import Header from './Header';
import Adds from './Adds';
import Tools from './Tools';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <div className="adds">
        <Adds />
      </div>
      <div className="tools">
        <Tools />
      </div>
      {/*tools heading*/}
      {/*main option*/}
    </div>
  );
}

export default App;
