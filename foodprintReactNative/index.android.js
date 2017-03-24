/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';


import LoginContainer from './containers/LoginContainer'
import Signup from './components/Signup'
import CalendarPage from './containers/CalendarContainer'
import CameraContainer from './containers/CameraContainer';
import Day from './containers/DayContainer'
import Meal from './containers/MealContainer'
import Home from './containers/HomeContainer'
import { Container, Button, Icon, Text, Footer, FooterTab } from 'native-base';
import Moment from 'moment';
import FooterComponent from './components/Footer'



import {
  AppRegistry,
} from 'react-native';

import store from './store';
import { welcomeScreen } from './reducers/default';
import { getAllMealsFromDB } from './reducers/meal'

function welcome () {
  store.dispatch(welcomeScreen());
  store.dispatch(getAllMealsFromDB());
}

export default class foodprintReactNative extends Component {



  render() {

    welcome();
    return (

    <Container>
    <Provider store={store}>
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="login" component={LoginContainer} title="Login" initial = {false} />
          <Scene key="signup" component={Signup} title="Sign up"/>
          <Scene key="home" component={Home} title="Home" initial = {false}/>
          <Scene key="calendar" component={CalendarPage} title= "Calendar View" initial = {true}  />
          <Scene key="day" component={Day} title= "Day View" />
          <Scene key="meal" component={Meal} title= "Meal View" />
          <Scene key="camera" component={CameraContainer} title= "Camera View" />
       </Scene>
      </Router>
    </Provider>
      <FooterComponent />
    </Container>
    )
  }
}

AppRegistry.registerComponent('foodprintReactNative', () => foodprintReactNative);

