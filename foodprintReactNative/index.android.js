/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './android/components/Home'
import Login from './android/components/Login'
import Calendar from './android/components/Calendar'
import Day from './android/components/Day'
import Meal from './android/components/Meal'


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
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial = {true}/>
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="calendar" component={Calendar} title= "Calendar View"/>
          <Scene key="day" component={Day} title= "Day View"/>
          <Scene key="meal" component={Meal} title= "Meal View"/>
       </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('foodprintReactNative', () => foodprintReactNative);
