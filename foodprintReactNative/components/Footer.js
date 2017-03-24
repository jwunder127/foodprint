import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {

} from 'react-native';
import {
  StyleSheet,
} from 'react-native';
import Calendar from 'react-native-calendar-datepicker';
import Moment from 'moment';
import { Container, Content, Button, Icon, Text, Footer, FooterTab, Body, Left, Right } from 'native-base';

export default class FooterComponent extends Component {


render() {

    const goToToday = () => Actions.day({date: Moment().format()})
    const backColor = '#006b76'
    const iconColor =  '#c4def6'

    return (
      <Footer >
          <FooterTab>
            <Button  onPress={() => {Actions.calendar()}} style={{backgroundColor: backColor}} >
              <Icon style={{color: iconColor}} name="calendar" />
              <Text style={{color: iconColor}}>Calendar</Text>
            </Button>
            <Button  onPress={() => Actions.camera()} style={{backgroundColor: backColor}} >
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
    )
}
}





















