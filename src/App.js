import React from 'react';
import { Route, Switch } from 'react-router-dom'


import './App.css';

import HomePage from '../src/pages/homepage/homepage.components'
import ShopPage from '../src/pages/shop/shop.component'

function App() {
  return (
    <Switch>
      <Route  exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
