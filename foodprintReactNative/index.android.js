/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Provider } from 'react-redux';

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import CalendarPage from './components/Calendar'
import CameraView from './components/Camera';
import Day from './components/Day'
import Meal from './components/Meal'
import Tiled from './components/Tiled'
import { Container, Button, Icon, Text, Footer, FooterTab } from 'native-base';
import Moment from 'moment';


import {
  AppRegistry,
} from 'react-native';

import store from './store';
import { welcomeScreen } from './reducers/default';

function welcome () {
  store.dispatch(welcomeScreen());
}


export default class foodprintReactNative extends Component {



  render() {
    const goToToday = () => Actions.day({date: Moment().format('MMMM DD YYYY')})
    const backColor = '#006b76'
    const iconColor =  '#c4def6'


    welcome();
    return (

    <Container>
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Sign up"/>
          <Scene key="home" component={Tiled} title="Home" initial = {true}/>
          <Scene key="calendar" component={CalendarPage} title= "Calendar View" hideNavBar={false} />
          <Scene key="day" component={Day} title= "Day View" />
          <Scene key="meal" component={Meal} title= "Meal View" />
          <Scene key="camera" component={CameraView} title= "Camera View" />

       </Scene>
      </Router>
    </Provider>
      <Footer >
          <FooterTab>
            <Button  onPress={() => {Actions.calendar()}} style={{backgroundColor: backColor}} >
              <Icon style={{color: iconColor}} name="calendar" />
              <Text style={{color: iconColor}}>Calendar</Text>
            </Button>
            <Button  onPress={() => Actions.meal()} style={{backgroundColor: backColor}} >
              <Icon name="camera" style={{color: iconColor}} />
              <Text style={{color: iconColor}}>Camera</Text>
            </Button>
            <Button  onPress={() => { goToToday()}} style={{backgroundColor: backColor}} >
              <Icon  name="nutrition" style={{color: iconColor}}/>
              <Text style={{color: iconColor}}>Today</Text>
            </Button>
            <Button  onPress={() => {Actions.home()}} style={{backgroundColor: backColor}}>
              <Icon  name="home" style={{color: iconColor}}/>
              <Text style={{color: iconColor}}>Home</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    )
  }
}

AppRegistry.registerComponent('foodprintReactNative', () => foodprintReactNative);
