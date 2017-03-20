import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  ListItem,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  Thumbnail,
  List,
  Badge
} from 'native-base';
import {Text, ScrollView, StyleSheet, View, Button, Text as RNText} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DayView extends Component {
  render() {
    return (
      <Container style={{marginTop: 70, marginBottom: 10}}>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
            <Thumbnail style={{width: 80, height: 80}} square source={require('../img/salad.png')}/>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
