import React from 'react';
import './App.css';
import Header from './Header';
import {Route, Link} from "react-router-dom";
import Trade from "./Trade"
import Tools from './Tools';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      <Header />
      <Route exact path="/Trade" component={Trade} />
      <Route exact path="/Tools" component={Tools} />
    </div>
  );
}

export default App;
