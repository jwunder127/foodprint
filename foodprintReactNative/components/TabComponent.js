import React, { Component } from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import { Container, Content, Button, Icon, Text, Footer, FooterTab, Body, Left, Right } from 'native-base';

import CalendarPage from './Calendar'
import CameraContainer from '../containers/CameraContainer';
import Day from '../containers/DayContainer'
import Meal from '../containers/MealContainer'
import Home from '../containers/HomeContainer'

import { calendarIcon, cameraIcon, nutritionIcon, homeIcon } from './Icons'
let style = StyleSheet.create({
        tabBarStyle: {
            borderTopWidth : .5,
            borderColor    : '#b7b7b7',
            backgroundColor: '#006b76',
            opacity        : 1
        }
    });

const backColor = '#006b76'

export default class TabBarComponent extends Component {


render() {

    const goToToday = () => Actions.day({date: Moment().format()})

    return (
              <Scene
                key="myTab"
                title="My Tab"
                icon={calendarIcon}
                onPress={()=> {
                  Actions.calendar();
                }}
              >
                <Scene key="home" component={Home} title="Home" initial = {false} tabs={false} hideNavBar={true} />
                <Scene key="calendar" component={CalendarPage} title= "Calendar View" hideNavBar={true} />
                <Scene key="day" component={Day} title= "Day View" hideNavBar={true}/>
                <Scene key="meal" component={Meal} title= "Meal View" hideNavBar={true}/>
                <Scene key="camera" component={CameraContainer} title= "Camera View" hideNavBar={true}/>
              </Scene>
    )
  }
}


