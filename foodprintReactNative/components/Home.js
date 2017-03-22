import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class Home extends Component {


  render() {
    console.log("Home Screen")
    return (
      <View>
        <Text style={{margin: 10}}>
          Home Page!
        </Text>

      </View>
    );
  }
}

// <Button onPress={Actions.calendar} title="Go To Calendar page"/>
// <Button onPress={Actions.camera} title="Go To Camera page"/>
