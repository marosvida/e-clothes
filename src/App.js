import React from 'react';
import { Route, Switch } from 'react-router-dom'


import './App.css';

import HomePage from '../src/pages/homepage/homepage.components'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  path='/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
