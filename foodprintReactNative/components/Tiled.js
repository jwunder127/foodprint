import React, { Component } from 'react';
import {Text, ScrollView, StyleSheet, View, Button, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class DayView extends Component {
  render() {
    return (
      <View style={{marginTop: 70, marginBottom: 10}}>
        <ScrollView>
          <View style={{flexDirection: 'row', flexWrap: 'wrap' }}>
            <Image style={{width: 100, height: 100, borderWidth: 4}} square source={require('../img/salad.png')}/>
            <Image style={{width: 100, height: 100, borderWidth: 4}} square source={require('../img/salad.png')}/>
            <Image style={{width: 100, height: 100, borderWidth: 4}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 4}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 4}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 4}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 4}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 1}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 1}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 1}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 1}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 1}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 1}} square source={require('../img/salad.png')}/>
            <Image style={{width: 115, height: 115, borderWidth: 1}} square source={require('../img/salad.png')}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}
