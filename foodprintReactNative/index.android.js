/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import Home from './components/Home'
import LoginContainer from './containers/LoginContainer'
import Signup from './components/Signup'
import Calendar from './components/Calendar'
import Day from './components/Day'
import Meal from './components/Meal'


import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import store from './store';
import { welcomeScreen } from './reducers/default';

function welcome () {
  store.dispatch(welcomeScreen());
}


export default class foodprintReactNative extends Component {
  render() {
    welcome();
    return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginContainer} title="Login" initial = {true} />
          <Scene key="signup" component={Signup} title="Sign up"/>
          <Scene key="home" component={Home} title="Home" />
          <Scene key="calendar" component={Calendar} title= "Calendar View" />
          <Scene key="day" component={Day} title= "Day View" />
          <Scene key="meal" component={Meal} title= "Meal View" />
       </Scene>
      </Router>
    </Provider>
    )
  }
}

AppRegistry.registerComponent('foodprintReactNative', () => foodprintReactNative);
