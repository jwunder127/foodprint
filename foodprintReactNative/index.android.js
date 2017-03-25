/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene, Actions, Switch } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import {connect} from 'react-redux';

import LoginContainer from './containers/LoginContainer'
import Signup from './components/Signup'
import CalendarPage from './components/Calendar'
import CameraContainer from './containers/CameraContainer';
import Day from './containers/DayContainer'
import Meal from './containers/MealContainer'
import Home from './containers/HomeContainer'
import { Container, Button, Icon, Text, Footer, FooterTab } from 'native-base';
import Moment from 'moment';
//import TabBarComponent from './components/TabComponent'



import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import store from './store';
import { welcomeScreen } from './reducers/default';
import { getAllMealsFromDB } from './reducers/meal';

import { calendarIcon, cameraIcon, nutritionIcon, homeIcon } from './components/Icons'
let style = StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : .5,
            borderColor    : '#b7b7b7',
            backgroundColor: '#006b76',
            opacity        : 1
        }
    });

const backColor = '#006b76';
const iconColor =  '#c4def6';


export default class foodprintReactNative extends Component {


  render() {

    return (

    <Container>
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="login" component={LoginContainer} title="Login" initial = {true} />
            <Scene key="signup" component={Signup} title="Sign up"/>
            <Scene key="myTabBar" tabs={true} hideNavBar={true} tabBarStyle={style.tabBarStyle} >
              <Scene
                key="myTab"
                title="My Tab"
                icon={calendarIcon}
                onPress={()=> {
                  Actions.calendar();
                }}
              >
                <Scene key="home" component={Home} title="Home" initial = {false} tabs={true} hideNavBar={true} />
                <Scene key="calendar" component={CalendarPage} title="Calendar View" tabs={true} hideNavBar={true} />
                <Scene key="day" component={Day} title="Day View" tabs={true} hideNavBar={true}/>
                <Scene key="meal" component={Meal} title="Meal View" tabs={true} hideNavBar={true}/>
                <Scene key="camera" component={CameraContainer} title="Camera View" tabs={true}hideNavBar={true} />
              </Scene>
            </Scene>
          </Scene>
        </Router>
      </Provider>
    </Container>
    )
  }
}

AppRegistry.registerComponent('foodprintReactNative', () => foodprintReactNative);

