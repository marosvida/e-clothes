import React from 'react';
import { Route, Switch } from 'react-router-dom'


import './App.css';

import Header from './components/header/header.component'
import HomePage from '../src/pages/homepage/homepage.components'
import ShopPage from '../src/pages/shop/shop.component'
import SignINAndSignUpPage from '../src/pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignINAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
