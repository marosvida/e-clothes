import React from 'react';
import { Route, Switch } from 'react-router-dom'


import './App.css';

import Header from './components/header/header.component'
import HomePage from '../src/pages/homepage/homepage.components'
import ShopPage from '../src/pages/shop/shop.component'
import SignInAndSignUpPage from '../src/pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from '../src/firebase/firebase.utils'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
